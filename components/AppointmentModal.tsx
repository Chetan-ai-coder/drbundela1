'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { X, Calendar, MessageCircle, CheckCircle2 } from 'lucide-react';

interface AppointmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm animate-fade-in"
            onClick={onClose}
        >

            {/* Modal Layout Body */}
            <div 
            onClick={(e) => e.stopPropagation()}
            className="relative bg-card text-card-foreground w-full max-w-2xl rounded-lg overflow-hidden shadow-2xl border border-border flex flex-col md:flex-row transform transition-all animate-scale-in max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Close modal"
                >
                    <X className="w-4 h-4" />
                </button>

                {/* Side Banner Panel: Image Content */}
                <div className="relative w-full md:w-2/5 min-h-[180px] md:min-h-full bg-gradient-to-br from-primary/20 to-secondary flex items-end p-6 rounded-lg overflow-hidden">
                    <div className="absolute inset-0">

                        {/* Mobile Image */}
                        <Image
                            src="/Dr Bundela/Homoeopathy/homoeopathy1.jpg"
                            alt="Dr. R.S.S. Bundela"
                            fill
                            className="object-cover object-center opacity-90 rounded-l-lg md:hidden"
                            priority
                            crossOrigin="anonymous"
                        />

                        {/* Desktop Image */}
                        <Image
                            src="/Dr Bundela/Doctor/doctor-hero"
                            alt="Dr. R.S.S. Bundela"
                            fill
                            className="hidden md:block object-cover object-center opacity-90 rounded-l-lg"
                            priority
                            crossOrigin="anonymous"
                        />
                        {/* Smooth overlay matching standard styling */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent rounded-l-lg" />
                    </div>

                    {/* Subtle Float Indicator Over Image */}
                    <div className="relative z-10 bg-card/90 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-border shadow-xs flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        <span className="text-[10px] font-medium tracking-wide uppercase text-foreground">Verified Treatment</span>
                    </div>
                </div>

                {/* Content & Interactive Region */}
                <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between bg-card rounded-lg">

                    <div>
                        {/* Header Text Block */}
                        <p className="text-[11px] font-medium text-primary mt-1 ml-10 -mb-2 italic">
                            A Surgeon Without Knife
                        </p>
                        <h3 className="font-serif text-2xl font-bold text-foreground tracking-tight">
                            Dr. R.S.S. Bundela
                        </h3>

                        <hr className="my-4 border-border" />

                        {/* Target Core Statement Callout Box */}
                        <div className="bg-secondary rounded-lg p-4 border border-border/60">
                            <p className="text-foreground font-medium text-base md:text-md leading-relaxed">
                                "किसी भी ऑपरेशन से पूर्व संपर्क अवश्य करें, आप ऑपरेशन से बच भी सकते हैं।"
                            </p>
                        </div>
                    </div>

                    {/* Action Call to Actions */}
                    <div className="mt-8 pt-4 border-t border-border">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                            Book Appointment
                        </p>

                        <div className="flex flex-col gap-3">
                            {/* Primary Direct Internal Link Route */}
                            <Button asChild className="w-full rounded-md h-12 text-sm font-medium shadow-sm">
                                <Link href="/appointment" onClick={onClose}>
                                    <Calendar className="w-4 h-4 mr-2" />
                                    Schedule Appointment
                                </Link>
                            </Button>

                            {/* Native Fallback Green WhatsApp Contact Button from Hero Section */}
                            <Button
                                asChild
                                variant="outline"
                                className="w-full rounded-md h-12 text-sm border hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors duration-300"
                            >
                                <a
                                    href="https://wa.me/919415187520"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={onClose}
                                >
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    Consult via WhatsApp
                                </a>
                            </Button>
                        </div>

                        <p className="text-[11px] text-muted-foreground text-center mt-3 tracking-wide">
                            Natural Healing · Root Cause Treatment
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
}