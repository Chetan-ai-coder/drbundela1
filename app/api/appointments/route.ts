// app/api/appointments/route.ts
import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { name, email, phone, date, time, service, message } = body

        // ─── 2. Send WhatsApp via UltraMsg ────────────────────────────────────────
        const instance = process.env.ULTRAMSG_INSTANCE
        const token = process.env.ULTRAMSG_TOKEN

        console.log("UltraMsg instance:", instance)
        console.log("UltraMsg token:", token)

        if (instance && token) {
            const waBody = `📅 New Appointment!\n\n👤 ${name}\n📞 ${phone}\n🏥 ${service || "Not specified"}\n📅 ${date} at ${time}\n💬 ${message || "No message"}`

            const params = new URLSearchParams()
            params.append("token", token)
            params.append("to", "+919415187520") // Clinic's WhatsApp number
            params.append("body", waBody)

            console.log("Sending WhatsApp to +919415187520...")

            const waResponse = await fetch(`https://api.ultramsg.com/${instance}/messages/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: params.toString()
            })

            const waResult = await waResponse.json()
            console.log("UltraMsg response:", JSON.stringify(waResult))
        } else {
            console.log("UltraMsg credentials missing — skipping WhatsApp")
        }

        return NextResponse.json({ success: true }, { status: 200 })
    } catch (error) {
        console.error("Appointment API error:", error)
        return NextResponse.json({ success: false, error: "Failed to send" }, { status: 500 })
    }
}