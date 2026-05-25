import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST ?? "smtp.gmail.com";
const SMTP_PORT = parseInt(process.env.SMTP_PORT ?? "587", 10);
const SMTP_EMAIL = process.env.SMTP_EMAIL;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "trainingtrains2023@gmail.com";
const CONTACT_NOTIFY_EMAIL = process.env.CONTACT_NOTIFY_EMAIL ?? "trainingtrains2023@gmail.com";
const SITE_NAME = process.env.SITE_NAME ?? "W3AppDevelopers";
const SITE_URL = process.env.SITE_URL ?? "https://w3appdevelopers.com";

function createTransporter() {
  if (!SMTP_EMAIL || !SMTP_PASSWORD) {
    throw new Error("SMTP credentials not configured in environment secrets.");
  }
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
}

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string | null;
  subject: string;
  message: string;
  submittedAt: Date;
};

export async function sendAdminNotification(contact: ContactPayload): Promise<void> {
  const transporter = createTransporter();
  await transporter.sendMail({
    from: `"${SITE_NAME}" <${SMTP_EMAIL}>`,
    to: CONTACT_NOTIFY_EMAIL,
    subject: `New Contact Form Submission - ${SITE_NAME}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="color: #FF6028; margin-top: 0;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #6b7280; width: 120px;"><strong>Name</strong></td><td style="padding: 8px 0;">${contact.name}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Email</strong></td><td style="padding: 8px 0;"><a href="mailto:${contact.email}" style="color: #FF6028;">${contact.email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Phone</strong></td><td style="padding: 8px 0;">${contact.phone ?? "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Subject</strong></td><td style="padding: 8px 0;">${contact.subject}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Submitted</strong></td><td style="padding: 8px 0;">${contact.submittedAt.toLocaleString()}</td></tr>
        </table>
        <div style="margin-top: 16px; padding: 16px; background: #f9fafb; border-radius: 6px;">
          <strong style="color: #374151;">Message:</strong>
          <p style="margin: 8px 0 0; color: #4b5563; white-space: pre-wrap;">${contact.message}</p>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">This message was submitted via the contact form on <a href="${SITE_URL}" style="color: #FF6028;">${SITE_URL}</a></p>
      </div>
    `,
  });
}

export async function sendUserAutoReply(contact: ContactPayload): Promise<void> {
  const transporter = createTransporter();
  await transporter.sendMail({
    from: `"${SITE_NAME}" <${SMTP_EMAIL}>`,
    to: contact.email,
    subject: `Thank you for contacting ${SITE_NAME}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <div style="text-align: center; margin-bottom: 24px;">
          <h1 style="color: #FF6028; margin: 0;">W3</h1>
          <p style="color: #6b7280; margin: 4px 0 0;">App Developers</p>
        </div>
        <h2 style="color: #111827;">Thank you for reaching out, ${contact.name}!</h2>
        <p style="color: #4b5563; line-height: 1.6;">
          We have successfully received your message regarding <strong>"${contact.subject}"</strong>.
          Our team will review your enquiry and get back to you as soon as possible, usually within 1–2 business days.
        </p>
        <div style="margin: 24px 0; padding: 16px; background: #fff7ed; border-left: 4px solid #FF6028; border-radius: 4px;">
          <p style="margin: 0; color: #92400e; font-size: 14px;">
            In the meantime, feel free to explore our services at <a href="${SITE_URL}" style="color: #FF6028;">${SITE_URL}</a>
          </p>
        </div>
        <p style="color: #4b5563; line-height: 1.6;">
          If your matter is urgent, you can reach us directly at 
          <a href="https://wa.me/919698548633" style="color: #FF6028;">WhatsApp: +91 96985 48633</a>
        </p>
        <p style="color: #6b7280; margin-top: 24px;">Warm regards,<br /><strong style="color: #111827;">${SITE_NAME} Team</strong></p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
        <p style="font-size: 12px; color: #9ca3af; text-align: center;">
          ${SITE_NAME} &nbsp;|&nbsp; Mullamparappu, Erode, Tamil Nadu, India<br />
          <a href="${SITE_URL}" style="color: #FF6028;">${SITE_URL}</a>
        </p>
      </div>
    `,
  });
}
