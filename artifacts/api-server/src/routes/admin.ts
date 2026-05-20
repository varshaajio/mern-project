import { Router, type IRouter } from "express";
import { db, blogsTable, contactsTable } from "@workspace/db";
import { eq, count } from "drizzle-orm";
import {
  AdminLoginBody,
  AdminLoginResponse,
  GetAdminStatsResponse,
} from "@workspace/api-zod";
import { generateToken, authenticateAdmin } from "../middleware/auth";

const router: IRouter = Router();

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "admin@w3appdevelopers.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "W3Admin@2024";

router.post("/admin/login", async (req, res): Promise<void> => {
  const parsed = AdminLoginBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { email, password } = parsed.data;

  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }

  const token = generateToken({ email, role: "admin" });

  res.json(AdminLoginResponse.parse({ token, message: "Login successful" }));
});

router.get("/admin/stats", authenticateAdmin, async (req, res): Promise<void> => {
  const [contactCount] = await db.select({ count: count() }).from(contactsTable);
  const [totalBlogCount] = await db.select({ count: count() }).from(blogsTable);
  const [publishedBlogCount] = await db
    .select({ count: count() })
    .from(blogsTable)
    .where(eq(blogsTable.status, "published"));
  const [draftBlogCount] = await db
    .select({ count: count() })
    .from(blogsTable)
    .where(eq(blogsTable.status, "draft"));

  res.json(
    GetAdminStatsResponse.parse({
      totalContacts: contactCount.count,
      totalBlogs: totalBlogCount.count,
      publishedBlogs: publishedBlogCount.count,
      draftBlogs: draftBlogCount.count,
    })
  );
});

export default router;
