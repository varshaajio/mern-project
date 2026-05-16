import { Router, Request, Response } from "express";
import { Contact } from "../models/Contact";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const contact = new Contact({ name, email, phone, service, message });
    await contact.save();

    return res.status(201).json({ success: true, message: "Your enquiry has been submitted successfully!" });
  } catch (error) {
    console.error("Contact route error:", error);
    return res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
});

router.get("/", async (_req: Request, res: Response) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.json({ success: true, data: contacts });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
