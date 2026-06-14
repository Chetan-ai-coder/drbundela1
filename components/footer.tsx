"use client"

import Link from "next/link"
import { Leaf, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/lib/translations"
import Image from "next/image"

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/drbundela1976",
    label: "Facebook",
    bgClass: "bg-[#1877F2]"
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/dr.bundela_homoeopathy",
    label: "Instagram",
    bgClass: "bg-[#E1306C]"
  },
  {
    icon: Youtube,
    href: "#",
    label: "YouTube",
    bgClass: "bg-[#FF0000]"
  },
];

export function Footer() {
  const { lang } = useLanguage()
  const t = (translations[lang] || translations.en).footer

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/Dr Bundela/Doctor/logo.png"
                alt="Dr. R.S.S. Bundela Logo"
                width={200}
                height={50}
                className="object-contain"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              {t.description}
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-85 ${social.bgClass}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">{t.quickLinksTitle}</h4>
            <ul className="space-y-3">
              {t.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">{t.treatmentsTitle}</h4>
            <ul className="space-y-3">
              {t.treatments.map((treatment) => (
                <li key={treatment}>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {treatment}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">{t.contactTitle}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm whitespace-pre-line">
                  {t.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+919415187520" className="text-white/70 hover:text-primary transition-colors text-sm">
                  +91 94151 87520
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:bundela01100@gmail.com" className="text-white/70 hover:text-primary transition-colors text-sm">
                  bundela01100@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm whitespace-pre-line">
                  {t.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm text-center md:text-left">
            © {new Date().getFullYear()} {t.rights}
          </p>

          <div className="flex items-center gap-6 text-sm text-white">
            <p className="flex justify-center items-center">
              <span>{t.developedBy} </span>
              <Link href="https://moneymantra.co.in" target="_blank" className="ml-1 font-medium text-primary">
                Money Mantra
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}