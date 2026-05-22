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
    link: "/services#yoga",
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
      className="relative w-full min-h-[85vh] md:h-screen overflow-hidden md:top-30"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >

      {slides.map((slide, index) => (

        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide
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

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

          {/* Blur Effects */}
          <div className="absolute top-10 left-0 md:left-10 w-40 h-40 md:w-72 md:h-72 bg-primary/20 rounded-full blur-3xl z-10" />

          <div className="absolute bottom-10 right-0 md:right-10 w-52 h-52 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl z-10" />

          {/* Content */}
          <div className="absolute inset-0 z-30 flex items-center">

            <div className="container mx-auto px-4 sm:px-6 lg:px-12">

              <div className="max-w-3xl pt-20 md:pt-0">

                {/* Main Heading */}
                <h1
                  className="
                    font-serif
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    lg:text-7xl
                    font-bold
                    text-white
                    leading-tight
                    tracking-tight
                  "
                >
                  {slide.title}
                </h1>

                {/* Doctor Name */}
                {slide.doctor && (
                  <h2
                    className="
                      font-serif
                      text-lg
                      sm:text-xl
                      md:text-2xl
                      font-semibold
                      text-white
                      pt-3
                    "
                  >
                    {slide.doctor}
                  </h2>
                )}

                {/* Description */}
                <p
                  className="
                    mt-4
                    md:mt-6
                    text-sm
                    sm:text-base
                    md:text-lg
                    text-gray-200
                    leading-relaxed
                    max-w-xl
                  "
                >
                  Natural healing solutions with personalized care,
                  experienced consultation, and holistic wellness for
                  your complete family.
                </p>

                {/* CTA Button */}
                <div className="mt-6 md:mt-10 flex">

                  <Link
                    href={slide.link}
                    className="
                      h-12
                      md:h-14
                      px-6
                      md:px-8
                      rounded-full
                      bg-primary
                      text-white
                      text-sm
                      md:text-base
                      font-medium
                      hover:scale-105
                      transition-all
                      duration-300
                      shadow-2xl
                      shadow-primary/30
                      inline-flex
                      items-center
                      justify-center
                    "
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
      <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-40">

        {slides.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? "w-8 md:w-10 h-3 bg-primary"
                : "w-3 h-3 bg-white/40"
            }`}
          />

        ))}

      </div>

    </section>
  );
}