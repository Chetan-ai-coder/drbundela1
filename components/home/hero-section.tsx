"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, Calendar, CheckCircle, Award } from "lucide-react"

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const benefits = [
  "100% Natural Treatment",
  "No Side Effects",
  "Root Cause Healing",
]

export function HeroSection() {

  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                {t.badge}
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-foreground leading-[1.1] tracking-tight animate-fade-in-up">
              {t.titleMain}
              <span className="relative inline-block mt-2 text-primary">
                {t.titleSub}
                {/* Underline swoosh */}
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 9C50 3 150 1 298 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary opacity-40"/>
                </svg>
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-in-up ">
              {t.description}
            </p>

            {/* Benefits */}
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up">
              {t.benefits.map((benefit: string) => (
                <div key={benefit} className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Button asChild size="lg" className="rounded-full text-base px-8 h-14">
                <Link href="/appointment">
                  <Calendar className="w-5 h-5 mr-2" />
                  {t.btnBook}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full text-white px-8 h-14 border-2 bg-[#25D366] border-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors duration-300"
              >
                <a
                  href="https://wa.me/919415187520"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t.btnWhatsApp}
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 animate-fade-in-up">
              <div>
                <p className="font-serif text-3xl font-bold text-primary">28+</p>
                <p className="text-sm text-muted-foreground mt-1">{t.stats.exp}</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground mt-1">{t.stats.patients}</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground mt-1">{t.stats.success}</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative animate-fade-in-up">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-primary/10 rounded-3xl" />
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-primary/20 rounded-3xl" />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-primary/5">
                <Image
                  src="/Dr Bundela/Doctor/doctor-hero.jpeg"
                  alt="Dr. R.S.S. Bundela - Homeopathic Doctor"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover object-top"
                  priority
                  crossOrigin="anonymous"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/70 to-transparent pt-12 pb-4 px-5">
                  <p className="font-serif text-background font-bold text-base leading-tight">Dr. R.S.S. Bundela</p>
                  <p className="text-primary-foreground/70 text-[11px] mt-0.5 tracking-wide ml-19">[BHMS]</p>
                </div>
              </div>

              {/* Floating Card - Verified */}
              <div className="absolute -bottom-6 -right-3 bg-white rounded-2xl shadow-xl p-4 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.verified}</p>
                    <p className="text-sm text-muted-foreground">BHMS</p>
                  </div>
                </div>
              </div>

              {/* Floating Card - Experience Badge */}
              <div className="absolute -top-6 -right-3 bg-primary rounded-2xl shadow-xl p-4 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm leading-none">28+</p>
                    <p className="text-[12px] text-white/80 mt-0.5">Years of<br />Experience</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}