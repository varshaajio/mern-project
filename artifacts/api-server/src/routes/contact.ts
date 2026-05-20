import { Router, type IRouter } from "express";
import { db, contactsTable } from "@workspace/db";
import { desc } from "drizzle-orm";
import {
  SubmitContactBody,
  ListContactSubmissionsResponse,
} from "@workspace/api-zod";
import { authenticateAdmin } from "../middleware/auth";
import { sendAdminNotification, sendUserAutoReply } from "../services/emailService";

const router: IRouter = Router();

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [contact] = await db
    .insert(contactsTable)
    .values({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone ?? null,
      subject: parsed.data.subject,
      message: parsed.data.message,
    })
    .returning();

  req.log.info({ contactId: contact.id }, "Contact submission created");

  const payload = {
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    subject: contact.subject,
    message: contact.message,
    submittedAt: contact.createdAt,
  };

  Promise.allSettled([
    sendAdminNotification(payload),
    sendUserAutoReply(payload),
  ]).then((results) => {
    results.forEach((result, i) => {
      const label = i === 0 ? "admin notification" : "user auto-reply";
      if (result.status === "rejected") {
        req.log.error({ err: result.reason }, `Failed to send ${label} email`);
      } else {
        req.log.info(`Email sent: ${label}`);
      }
    });
  });

  res.status(201).json({
    id: contact.id,
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    subject: contact.subject,
    message: contact.message,
    createdAt: contact.createdAt.toISOString(),
  });
});

router.get("/contact/submissions", authenticateAdmin, async (req, res): Promise<void> => {
  const submissions = await db
    .select()
    .from(contactsTable)
    .orderBy(desc(contactsTable.createdAt));

  const result = ListContactSubmissionsResponse.parse(
    submissions.map((s) => ({
      ...s,
      createdAt: s.createdAt.toISOString(),
    }))
  );

  res.json(result);
});

export default router;
