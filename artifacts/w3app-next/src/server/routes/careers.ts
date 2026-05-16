import { Router, Request, Response } from "express";
import { CareerApplication } from "../models/CareerApplication";

const router = Router();

router.post("/apply", async (req: Request, res: Response) => {
  try {
    const { fullName, email, phone, position, experience, coverLetter } = req.body;

    if (!fullName || !email || !phone || !position || !experience || !coverLetter) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const application = new CareerApplication({
      fullName,
      email,
      phone,
      position,
      experience,
      coverLetter,
    });
    await application.save();

    return res.status(201).json({
      success: true,
      message: "Your application has been submitted successfully! We will contact you soon.",
    });
  } catch (error) {
    console.error("Careers route error:", error);
    return res.status(500).json({ success: false, message: "Server error. Please try again." });
  }
});

router.get("/applications", async (_req: Request, res: Response) => {
  try {
    const applications = await CareerApplication.find().sort({ createdAt: -1 });
    return res.json({ success: true, data: applications });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
