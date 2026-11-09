import { NextResponse } from "next/server";
import { brand } from "@/content/site";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  interest: string;
  industry: string;
  message: string;
  marketingOptIn?: boolean;
  /** Honeypot — must be empty */
  companyWebsite?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildEmailHtml(data: ContactPayload): string {
  const rows = [
    ["Name", data.name],
    ["Email", data.email],
    ["Interest", data.interest],
    ["Industry", data.industry],
    ["Message", data.message],
    ["Marketing opt-in", data.marketingOptIn ? "Yes" : "No"],
  ];
  const body = rows
    .map(
      ([label, val]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;color:#64748b;vertical-align:top">${label}</td><td style="padding:8px 12px;color:#0f172a">${escapeHtml(val)}</td></tr>`,
    )
    .join("");
  return `<table style="font-family:system-ui,sans-serif;border-collapse:collapse">${body}</table>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendViaResend(data: ContactPayload, to: string): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;

  const from = process.env.CONTACT_FROM_EMAIL ?? "TestYantra Website <onboarding@resend.dev>";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `[Website] ${data.interest} — ${data.name}`,
      html: buildEmailHtml(data),
    }),
  });
  return res.ok;
}

async function sendViaWebhook(data: ContactPayload): Promise<boolean> {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) return false;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      source: "testyantra-website",
      receivedAt: new Date().toISOString(),
      ...data,
    }),
  });
  return res.ok;
}

async function sendViaSmtp(data: ContactPayload, to: string): Promise<boolean> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return false;

  const nodemailer = await import("nodemailer");
  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure = process.env.SMTP_SECURE === "true";

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: process.env.CONTACT_FROM_EMAIL ?? user,
    to,
    replyTo: data.email,
    subject: `[Website] ${data.interest} — ${data.name}`,
    html: buildEmailHtml(data),
  });
  return true;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const data = body as ContactPayload;

  if (data.companyWebsite?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = data.name?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const interest = data.interest?.trim() ?? "General enquiry";
  const industry = data.industry?.trim() ?? "Other";
  const message = data.message?.trim() ?? "";

  if (!name || name.length < 2) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid work email." }, { status: 400 });
  }
  if (!message || message.length < 10) {
    return NextResponse.json({ error: "Please add a short message (at least 10 characters)." }, { status: 400 });
  }

  const marketingOptIn = Boolean(data.marketingOptIn);
  const payload: ContactPayload = { name, email, interest, industry, message, marketingOptIn };
  const to = process.env.CONTACT_TO_EMAIL ?? brand.emailPrimary;

  const configured =
    Boolean(process.env.RESEND_API_KEY) ||
    Boolean(process.env.CONTACT_WEBHOOK_URL) ||
    Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);

  if (!configured) {
    console.error("[contact] No delivery configured — set RESEND_API_KEY, SMTP_*, or CONTACT_WEBHOOK_URL");
    return NextResponse.json(
      {
        error:
          "Enquiry delivery is not configured on the server yet. Please email us directly at contactus@testyantra.com or call +91 9742490958.",
      },
      { status: 503 },
    );
  }

  try {
    const sent =
      (await sendViaResend(payload, to)) ||
      (await sendViaWebhook(payload)) ||
      (await sendViaSmtp(payload, to));

    if (!sent) {
      return NextResponse.json({ error: "Could not send your enquiry. Please try email or phone." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json({ error: "Something went wrong. Please email contactus@testyantra.com." }, { status: 500 });
  }
}
