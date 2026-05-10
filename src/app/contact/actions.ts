"use server";

import nodemailer from "nodemailer";

export type ContactResult =
  | { ok: true }
  | { ok: false; error: string };

export async function submitContact(formData: FormData): Promise<ContactResult> {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const industry = (formData.get("industry") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  // ── Basic validation ──────────────────────────────────────────
  if (!name) return { ok: false, error: "Please enter your full name." };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (!message) return { ok: false, error: "Please enter a message." };

  // ── SMTP config from environment variables ────────────────────
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "solutions@testyantraglobal.com";

  if (!host || !user || !pass) {
    // Dev fallback: log to console so the dev can see what would be sent
    console.log("──── Contact Form Submission (SMTP not configured) ────");
    console.log({ name, email, industry, message });
    console.log("Set SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_PORT in .env.local to enable email sending.");
    // Still return ok so the UI shows success in dev
    return { ok: true };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"TestYantra Website" <${user}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Enquiry from ${name} — ${industry || "General"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9fafb; border-radius: 12px;">
          <h2 style="color: #e8401a; margin: 0 0 24px;">New Enquiry — TestYantra</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #374151; width: 140px;">Name</td>
              <td style="padding: 10px 0; color: #111827;">${escHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #374151;">Email</td>
              <td style="padding: 10px 0; color: #111827;"><a href="mailto:${escHtml(email)}" style="color: #e8401a;">${escHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #374151;">Industry</td>
              <td style="padding: 10px 0; color: #111827;">${escHtml(industry || "—")}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
          <p style="font-weight: 600; color: #374151; margin: 0 0 8px;">Message</p>
          <p style="color: #111827; line-height: 1.7; white-space: pre-wrap; margin: 0;">${escHtml(message)}</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
          <p style="font-size: 12px; color: #9ca3af; margin: 0;">Submitted via testyantra.com contact form</p>
        </div>
      `,
      text: `New enquiry from ${name} (${email})\nIndustry: ${industry}\n\n${message}`,
    });

    return { ok: true };
  } catch (err) {
    console.error("Contact form email error:", err);
    return { ok: false, error: "Failed to send message. Please email us directly at solutions@testyantraglobal.com." };
  }
}

function escHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
