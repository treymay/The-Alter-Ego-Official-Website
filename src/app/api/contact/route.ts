import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/lib/copy";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json(
      { error: "Email is not configured. Set RESEND_API_KEY in Vercel." },
      { status: 503 },
    );
  }

  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const company = String(body.company ?? "").trim();
    const details = String(body.details ?? "").trim();

    if (!name || !email || !company || !details) {
      return NextResponse.json(
        { error: "Name, email, company, and project details are required." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (details.length > 5000) {
      return NextResponse.json({ error: "Message is too long." }, { status: 400 });
    }

    const from =
      process.env.RESEND_FROM ?? "The Alter Ego <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `Project inquiry — ${company}`,
      html: `
        <h2>New project inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Brand / Company:</strong> ${escapeHtml(company)}</p>
        <p><strong>Project details:</strong></p>
        <p>${escapeHtml(details).replaceAll("\n", "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send message. Try again or email directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Could not send message." }, { status: 500 });
  }
}
