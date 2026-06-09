"use client";

import { CalendarDays } from "lucide-react";

import Button from "@/components/ui/Button";

export default function CTASection() {

  return (

    <section
      id="contact"
      className="relative overflow-hidden"
    >

      <div className="relative">

        {/* Background Image */}
        <img
          src="/images/cta.webp"
          alt="CTA Background"
          className="h-[320px] w-full object-cover md:h-[210px]"
        />

        {/* Red Overlay */}
        <div className="absolute inset-0 bg-red-900/55" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/75 via-red-700/40 to-red-950/75" />

        {/* Content */}
        <div className="absolute inset-0 z-10">

<div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-5 px-6 pb-12 pt-10 md:flex-row md:justify-between md:py-8 lg:px-10">
            {/* Left */}
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left md:items-center md:gap-6">

              {/* Icon */}
<div className="flex h-16 w-16 md:h-24 md:w-24 items-center justify-center rounded-[22px] md:rounded-[28px] border border-white/20 bg-white/10 backdrop-blur-xl">
                <CalendarDays
  size={36}
  className="text-white md:hidden"
/>

<CalendarDays
  size={52}
  className="hidden text-white md:block"
/>

              </div>

              {/* Text */}
              <div>

                <h2 className="font-[family-name:var(--font-bebas)] text-4xl md:text-5xl uppercase leading-none text-white">

                  ¿Listo Para Que Tu Auto Luzca Increíble?

                </h2>

                <p className="mt-3 text-sm text-white/85 md:text-base">

                  Reservá tu turno hoy y dejalo en manos de profesionales.

                </p>

              </div>

            </div>

            {/* Right */}
            <div className="w-full md:w-auto shrink-0">

              <Button
  variant="secondary"
  className="
    w-full
    md:w-auto
    !border-transparent
    !bg-white
    px-8
    py-4
    !text-black
    hover:!bg-black
    hover:!text-white
  "
>
                Reservá Por WhatsApp

              </Button>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}