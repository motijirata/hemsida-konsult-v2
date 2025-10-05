
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, date, message } = await req.json();

    if (!name || !email || !date || !message) {
      return NextResponse.json({ error: "Alla fält krävs." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // HTML table for email content
    const html = `
      <h2>Ny bokning via hemsidan</h2>
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;">
        <tr>
          <th align="left">Namn</th>
          <td>${name}</td>
        </tr>
        <tr>
          <th align="left">E-post</th>
          <td>${email}</td>
        </tr>
        <tr>
          <th align="left">Datum/tid</th>
          <td>${date}</td>
        </tr>
        <tr>
          <th align="left">Meddelande</th>
          <td>${message.replace(/\n/g, "<br/>")}</td>
        </tr>
      </table>
    `;

    await transporter.verify();
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
      subject: "Ny bokning via hemsidan",
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("BOOKA API ERROR:", error);
    return NextResponse.json({ error: "Kunde inte skicka e-post." }, { status: 500 });
  }
}