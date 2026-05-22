"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Health Care For Whole Family",
    button: "Check Treatments",
    image: "/Dr Bundela/Doctor/clinic-inside2.jpeg",
    link: "/diseases",
  },

  {
    id: 2,
    title: "India's Trusted Homoeopathic Clinic",
    button: "Order Medicine",
    image: "/Dr Bundela/Doctor/free_delivery.webp",
    link: "tel:+919415187520",
    type: "call",
  },

  {
    id: 3,
    title: "Professional Dietitian Support",
    doctor: "Somya Singh - Certified Dietitian",
    button: "Diet Plans",
    image: "/Dr Bundela/Doctor/dietitian",
    link: "/services#dietitian",
  },

  {
    id: 4,
    title: "Yoga & Wellness Programs",
    doctor: "Nitya Singh - [MSC Yoga]",
    button: "Start Today",
    image: "/Dr Bundela/Doctor/yoga",
    link: `/services#yoga`,
  },
];

export default function SliderSection() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Next Slide
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  // Prev Slide
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // Auto Slide
  useEffect(() => {

    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);

  }, []);

  // Swipe Logic
  const handleTouchStart = (e: any) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {

    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      prevSlide();
    }

  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden top-10 md:top-30"

      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide
            ? "opacity-100 scale-100 z-20"
            : "opacity-0 scale-105 z-10"
            }`}
        >

          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 z-10" />

          {/* Premium Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />

          {/* Blur Circles */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl z-10" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-10" />

          {/* Content */}
          <div className="absolute inset-0 z-30 flex items-center">

            <div className="container mx-auto px-6 lg:px-12">

              <div className="max-w-3xl">

                {/* Heading */}
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                  {slide.title}
                </h1>

                <h1 className="font-serif text-5xl md:text-2xl font-bold text-white leading-[1.1] tracking-tight pt-5">
                  {slide.doctor}
                </h1>

                {/* Description */}
                <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
                  Natural healing solutions with personalized care,
                  experienced consultation, and holistic wellness for
                  your complete family.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4">

                  <Link
                    href={slide.link}
                    className="h-14 px-8 rounded-full bg-primary text-white font-medium hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary/30 inline-flex items-center justify-center"
                  >
                    {slide.button}
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>
      ))}

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-40">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${currentSlide === index
              ? "w-10 h-3 bg-primary"
              : "w-3 h-3 bg-white/40"
              }`}
          />
        ))}

      </div>

    </section>
  );
}