import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Define a robust fallback recipient address if not customized in env
const RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || "sadikali.developer@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, program, message } = body;

    // Basic server-side input validation
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and Email are required parameters." },
        { status: 400 }
      );
    }

    // Format program code to user-friendly label
    const programLabels: Record<string, string> = {
      strength: "Strength Training",
      fatloss: "Fat Loss & HIIT",
      cardio: "Cardio & Endurance",
      personal: "1-on-1 Personal Coach",
    };
    const programLabel = programLabels[program] || program || "General Inquiry";

    // Validate if API Key is configured. If not, log details and return success for easy testing
    if (!process.env.RESEND_API_KEY) {
      console.warn("⚠️ RESEND_API_KEY env variable is missing! Local Form Submission Logged:");
      console.log({ name, email, phone, programLabel, message });
      return NextResponse.json({
        success: true,
        message: "Submission logged successfully (Simulation Mode).",
        simulation: true,
      });
    }

    // 1. Send Email Notification to Gym Admin / Owner
    const adminEmailResult = await resend.emails.send({
      from: "Apex Gym Portal <onboarding@resend.dev>",
      to: RECEIVER_EMAIL,
      subject: `🔥 New Apex Gym Evolution Request - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Apex Gym Evolution Request</title>
            <style>
              body {
                font-family: 'Inter', Arial, sans-serif;
                background-color: #050505;
                color: #ffffff;
                margin: 0;
                padding: 0;
              }
              .wrapper {
                width: 100%;
                background-color: #050505;
                padding: 40px 20px;
                box-sizing: border-box;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #0b0b0b;
                border: 1px solid #1a1a1a;
                border-top: 4px solid #00ff85;
                border-radius: 16px;
                padding: 40px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.8);
              }
              .logo {
                font-size: 24px;
                font-weight: 900;
                letter-spacing: 2px;
                color: #ffffff;
                text-transform: uppercase;
                margin-bottom: 30px;
                text-align: center;
              }
              .logo span {
                color: #00ff85;
              }
              h2 {
                font-size: 20px;
                font-weight: 800;
                text-transform: uppercase;
                color: #ffffff;
                margin-bottom: 20px;
                letter-spacing: 1px;
                border-bottom: 1px solid #1a1a1a;
                padding-bottom: 10px;
              }
              .field-table {
                width: 100%;
                margin-bottom: 30px;
                border-collapse: collapse;
              }
              .field-row {
                border-bottom: 1px solid #141414;
              }
              .field-label {
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                color: #666666;
                padding: 14px 0;
                width: 30%;
                font-weight: 700;
              }
              .field-value {
                font-size: 14px;
                color: #eeeeee;
                padding: 14px 0;
                font-weight: 500;
              }
              .accent-text {
                color: #00ff85;
                font-weight: 700;
              }
              .message-box {
                background-color: #050505;
                border: 1px solid #141414;
                border-radius: 8px;
                padding: 16px;
                color: #aaaaaa;
                font-size: 13.5px;
                line-height: 1.6;
                font-style: italic;
                margin-top: 10px;
              }
              .footer {
                text-align: center;
                margin-top: 40px;
                font-size: 11px;
                letter-spacing: 1px;
                color: #444444;
                text-transform: uppercase;
              }
            </style>
          </head>
          <body>
            <div class="wrapper">
              <div class="container">
                <div class="logo">APEX<span>GYM</span></div>
                <h2>🔥 New Evolution Request</h2>
                
                <table class="field-table">
                  <tr class="field-row">
                    <td class="field-label">Applicant Name</td>
                    <td class="field-value">${name}</td>
                  </tr>
                  <tr class="field-row">
                    <td class="field-label">Email Address</td>
                    <td class="field-value"><a href="mailto:${email}" style="color: #00ff85; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr class="field-row">
                    <td class="field-label">Phone Number</td>
                    <td class="field-value">${phone || "Not Provided"}</td>
                  </tr>
                  <tr class="field-row">
                    <td class="field-label">Chosen Program</td>
                    <td class="field-value class="accent-text" style="color: #00ff85; font-weight: 700;">${programLabel}</td>
                  </tr>
                </table>

                <h2>💬 Cover Message</h2>
                <div class="message-box">
                  "${message || "Hello! I am ready to start my evolution and train hard at Apex Gym. Please contact me soon."}"
                </div>

                <div class="footer">
                  © ${new Date().getFullYear()} APEX GYM PLATFORM • AUTOMATED NOTIFICATION
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Form submission securely processed and email sent successfully.",
      data: adminEmailResult,
    });
  } catch (error) {
    console.error("❌ Error encountered in API Route /api/contact:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
