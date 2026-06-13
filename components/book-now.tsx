'use client';

import React, { useState, useEffect } from 'react';
import { AppointmentModal } from './AppointmentModal';
import { Calendar } from 'lucide-react';

export function StickyBookButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-primary hover:bg-accent text-primary-foreground font-semibold px-3 py-4 rounded-l-2xl shadow-xl transition-all duration-300 ease-in-out items-center gap-2 [writing-mode:vertical-lr] rotate-180 tracking-wide text-sm border-l border-y border-primary-foreground/10"
      >
        <Calendar className="w-4 h-4 rotate-90 mb-1" />
        Book Now
      </button>

      <AppointmentModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}