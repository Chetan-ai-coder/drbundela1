import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, duration, disease } = body

    const instance = process.env.ULTRAMSG_INSTANCE
    const token = process.env.ULTRAMSG_TOKEN

    if (instance && token) {
      const waBody = `🏥 New Consultation Request!\n\n👤 ${name}\n📞 ${phone}\n🤒 Problem: ${disease || "Not specified"}\n⏱️ Duration: ${duration || "Not specified"}`

      const params = new URLSearchParams()
      params.append("token", token)
      params.append("to", "+919415187520")
      params.append("body", waBody)

      await fetch(`https://api.ultramsg.com/${instance}/messages/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString()
      })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Consultation API error:", error)
    return NextResponse.json({ success: false, error: "Failed to send" }, { status: 500 })
  }
}