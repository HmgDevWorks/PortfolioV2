import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Limits keep the endpoint from being used to mail large spam payloads.
const LIMITS = { name: 100, email: 200, subject: 200, message: 5000 } as const;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function asText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();
    const data = (body ?? {}) as Record<string, unknown>;
    const name = asText(data.name);
    const email = asText(data.email);
    const subject = asText(data.subject).replace(/[\r\n]+/g, " ");
    const message = asText(data.message);

    // Honeypot: real visitors never see or fill this field; bots do.
    if (asText(data.website)) {
      return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (
      name.length > LIMITS.name ||
      email.length > LIMITS.email ||
      subject.length > LIMITS.subject ||
      message.length > LIMITS.message
    ) {
      return NextResponse.json({ error: "Field too long" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Contact form: EMAIL_USER or EMAIL_PASS is not configured");
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    // Credentials come only from the Vercel environment, never from the repository.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Nuevo mensaje de contacto: ${subject || "Sin asunto"}`,
      text: `Nombre: ${name}\nEmail: ${email}\nAsunto: ${subject || "Sin asunto"}\n\n${message}`,
      html: `
        <h2>Nuevo mensaje de contacto desde tu portfolio</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Asunto:</strong> ${escapeHtml(subject || "Sin asunto")}</p>
        <p><strong>Mensaje:</strong></p>
        <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
        <hr>
        <p><small>Enviado desde tu portfolio web</small></p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
