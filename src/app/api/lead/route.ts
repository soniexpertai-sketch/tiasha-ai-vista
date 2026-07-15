import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const { name, email, phone, industry, message } = await request.json();

  if (typeof name !== "string" || !name.trim() || typeof email !== "string" || !email.trim()) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Lead form submitted but RESEND_API_KEY / LEAD_TO_EMAIL is not configured.");
    return NextResponse.json({ error: "Lead delivery is not configured." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const escape = (s: string) => s.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const { error } = await resend.emails.send({
    from: process.env.LEAD_FROM_EMAIL || "Tiasha AI Vista <onboarding@resend.dev>",
    to,
    replyTo: email,
    subject: `New consultation request — ${name}`,
    html: `
      <h2>New AI consultation request</h2>
      <p><strong>Name:</strong> ${escape(name)}</p>
      <p><strong>Email:</strong> ${escape(email)}</p>
      <p><strong>Phone:</strong> ${escape(phone || "—")}</p>
      <p><strong>Industry:</strong> ${escape(industry || "—")}</p>
      <p><strong>Message:</strong><br/>${escape(message || "—")}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send lead email." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
