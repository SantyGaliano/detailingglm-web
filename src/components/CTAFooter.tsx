"use client";

import {
  CalendarDays,
  MapPin,
  Phone,
  Mail,
  Clock3,
  Camera,
  Globe,
} from "lucide-react";

export default function CTAFooter() {

  return (

    <footer className="relative overflow-hidden bg-transparent">

      {/* TOP CTA */}
      <section className="relative overflow-hidden border-y border-white/10">

{/* Background */}
<div className="absolute inset-0">

  {/* Image */}
  <img
    src="/images/cta.png"
    alt="CTA Background"
    className="h-full w-full object-cover opacity-55"
  />

  {/* Soft Red Overlay */}
<div className="absolute inset-0 bg-red-600/55" />

{/* Cinematic Gradient */}
<div className="absolute inset-0 bg-gradient-to-r from-red-900/70 via-red-600/30 to-black/40" />

</div>

<div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 lg:flex-row lg:px-10">

  {/* LEFT */}
  <div className="flex items-center gap-5">

    {/* Icon */}
    <div className="flex h-[140px] w-[140px] items-center justify-center rounded-[30px] border border-white/20 bg-white/10 backdrop-blur-md">

  <CalendarDays
    size={80}
    strokeWidth={1.8}
    className="text-white"
  />

</div>

    {/* Text */}
    <div>

      <h2 className="font-[family-name:var(--font-bebas)] text-4xl uppercase leading-none text-white md:text-5xl">

        ¿Listo Para Que Tu Auto
        <span className="block">
          Luzca Increíble?
        </span>

      </h2>

      <p className="mt-3 text-sm leading-[1.8] text-white/80 md:text-base">

        Reservá tu turno hoy y dejalo en manos de profesionales.

      </p>

    </div>

  </div>

  {/* BUTTON */}
  <button className="border border-white/20 bg-white px-10 py-5 text-sm font-bold uppercase tracking-[0.25em] text-black transition-all duration-300 hover:bg-black hover:text-white">

    Reservá Por WhatsApp

  </button>

</div>


      </section>

      {/* FOOTER */}
      <section className="relative overflow-hidden">

        {/* Ambient Glow */}
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-red-500/10 blur-[120px]" />

        {/* Texture */}
        <div className="absolute inset-0 opacity-[0.015] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid gap-14 border-b border-white/10 pb-16 md:grid-cols-2 xl:grid-cols-4">

            {/* BRAND */}
            <div>

              <img
  src="/logo/logo.png"
  alt="Detailingg.lm"
  className="h-20 w-auto object-contain"
/>

              <p className="mt-6 max-w-sm text-sm leading-[2] text-gray-400">

                Cuidamos tu auto como si fuera nuestro.
                Servicios premium de detailing automotriz
                con estándares profesionales.

              </p>

              {/* Socials */}
              <div className="mt-8 flex items-center gap-4">

                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10">

                  <Camera size={18} />

                </button>

                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10">

                  <Globe size={18} />

                </button>

              </div>

            </div>

            {/* NAVIGATION */}
            <div>

              <h3 className="font-semibold uppercase tracking-[0.25em] text-white">

                Navegación

              </h3>

              <div className="mt-6 space-y-4 text-sm text-gray-400">

                <p className="transition-colors duration-300 hover:text-red-500">
                  Inicio
                </p>

                <p className="transition-colors duration-300 hover:text-red-500">
                  Servicios
                </p>

                <p className="transition-colors duration-300 hover:text-red-500">
                  Trabajos
                </p>

                <p className="transition-colors duration-300 hover:text-red-500">
                  Conócenos
                </p>

                <p className="transition-colors duration-300 hover:text-red-500">
                  Contacto
                </p>

              </div>

            </div>

            {/* SERVICES */}
            <div>

              <h3 className="font-semibold uppercase tracking-[0.25em] text-white">

                Servicios

              </h3>

              <div className="mt-6 space-y-4 text-sm text-gray-400">

                <p>Lavado Premium</p>

                <p>Pulido y Encerado</p>

                <p>Protección Cerámica</p>

                <p>Limpieza Interior</p>

                <p>Detailing Completo</p>

              </div>

            </div>

            {/* CONTACT */}
            <div>

              <h3 className="font-semibold uppercase tracking-[0.25em] text-white">

                Contacto

              </h3>

              <div className="mt-6 space-y-5 text-sm text-gray-400">

                <div className="flex items-start gap-4">

                  <MapPin
                    size={18}
                    className="mt-0.5 text-red-500"
                  />

                  <span>
                    Av. Siempre Viva 742,
                    Springfield
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <Phone
                    size={18}
                    className="text-red-500"
                  />

                  <span>
                    11 1234 5678
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <Mail
                    size={18}
                    className="text-red-500"
                  />

                  <span>
                    hola@detailingglm.com
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <Clock3
                    size={18}
                    className="text-red-500"
                  />

                  <span>
                    Lun - Sáb: 8:00 - 19:00
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="pt-8 text-center">

            <p className="text-sm text-gray-500">

              © 2026 detailingg.lm — Todos los derechos reservados.

            </p>

          </div>

        </div>

      </section>

    </footer>

  );

}