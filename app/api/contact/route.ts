// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { name, email, phone, subject, message } = body

    // ─── UltraMsg WhatsApp Integration ─────────────────────────────
    const instance = process.env.ULTRAMSG_INSTANCE
    const token = process.env.ULTRAMSG_TOKEN

    console.log("UltraMsg instance:", instance)
    console.log("UltraMsg token:", token)

    if (instance && token) {
      const waBody = `📩 New Contact Message!

👤 Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email || "Not provided"}
📝 Subject: ${subject || "No subject"}

💬 Message:
${message || "No message"}
`

      const params = new URLSearchParams()
      params.append("token", token)
      params.append("to", "919415187520")
      params.append("body", waBody)

      console.log("Sending WhatsApp message...")

      const waResponse = await fetch(
        `https://api.ultramsg.com/${instance}/messages/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
        }
      )

      const waResult = await waResponse.json()

      console.log("UltraMsg response:", JSON.stringify(waResult))
    } else {
      console.log("UltraMsg credentials missing — skipping WhatsApp")
    }

    return NextResponse.json(
      {
        success: true,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact API error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message",
      },
      { status: 500 }
    )
  }
}