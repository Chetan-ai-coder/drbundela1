"use client"

import { Phone } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

export function CallNowBanner() {
  const { lang } = useLanguage()

  const content = {
    en: {
      btn: "Call now",
      status: "Doctor is online.. Call now..."
    },
    hi: {
      btn: "अभी कॉल करें",
      status: "डॉक्टर ऑनलाइन हैं ..अभी कॉल करें..."
    }
  }

  const t = lang === "hi" ? content.hi : content.en

  return (
    <div className="sticky bottom-0 left-0 w-full z-[999] pointer-events-auto">
      <section className="bg-gradient-to-r from-[oklch(0.38_0.14_25)] via-[oklch(0.45_0.15_25)] to-[oklch(0.52_0.18_35)] py-2 shadow-[0_-6px_25px_rgba(0,0,0,0.22)] border-t border-white/10 backdrop-blur-sm">
        
        <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-[2px]">
          
          {/* Pulsing Call Button */}
          <motion.a
            href="tel:+919415187520"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              ease: "easeInOut"
            }}
            className="flex items-center gap-2 bg-white text-[oklch(0.42_0.14_25)] hover:bg-neutral-100 px-8 py-2 rounded-full shadow-xl border border-white/40 transition-all duration-300 group mb-1 font-semibold"
          >
            <div className="bg-[oklch(0.45_0.15_25)]/10 p-1 rounded-full">
              <Phone className="w-4 h-4 fill-[oklch(0.45_0.15_25)]" />
            </div>

            <span className="text-lg font-bold tracking-tight uppercase">
              {t.btn}
            </span>
          </motion.a>

          {/* Online Status */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>

              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400 border border-white"></span>
            </span>

            <p className="text-white font-medium text-[13px] md:text-sm drop-shadow-sm tracking-wide">
              {t.status}
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}