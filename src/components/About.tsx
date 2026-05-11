"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Clock3,
  BadgeCheck,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Experiencia Profesional",
    description:
      "Años trabajando en detailing premium con resultados impecables.",
  },
  {
    icon: Sparkles,
    title: "Productos Premium",
    description:
      "Utilizamos productos de alta calidad para máxima protección.",
  },
  {
    icon: Clock3,
    title: "Turnos Ágiles",
    description:
      "Reservas rápidas y atención eficiente para cada cliente.",
  },
  {
    icon: BadgeCheck,
    title: "Resultados Garantizados",
    description:
      "Cada detalle está pensado para superar expectativas.",
  },
];

export default function About() {

  return (

    <section
  id="about"
  className="relative overflow-hidden bg-black py-24"
>

      {/* Ambient Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-red-500/10 blur-[140px]" />

      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-red-500/10 blur-[160px]" />

      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* ABOUT */}
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >

            <span className="text-xs uppercase tracking-[0.4em] text-red-500">

              Conócenos

            </span>

            <h2 className="mt-5 font-[family-name:var(--font-bebas)] text-5xl uppercase leading-[0.95] text-white md:text-7xl">

              Somos Apasionados
              <span className="block text-red-500">
                Por Los Detalles
              </span>

            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-[2] text-gray-300">

              En detailingg.lm transformamos vehículos con procesos
              profesionales y productos premium, cuidando cada
              superficie para lograr un acabado impecable
              tanto en el interior como exterior.

            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10">

                  <ShieldCheck
                    size={18}
                    className="text-red-500"
                  />

                </div>

                <span className="text-sm uppercase tracking-[0.25em] text-white">

                  Productos de Alta Calidad

                </span>

              </div>

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10">

                  <Sparkles
                    size={18}
                    className="text-red-500"
                  />

                </div>

                <span className="text-sm uppercase tracking-[0.25em] text-white">

                  Atención Personalizada

                </span>

              </div>

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10">

                  <BadgeCheck
                    size={18}
                    className="text-red-500"
                  />

                </div>

                <span className="text-sm uppercase tracking-[0.25em] text-white">

                  Resultados Premium

                </span>

              </div>

            </div>

            {/* BUTTON */}
            <div className="mt-12">

              <button className="group relative overflow-hidden border border-red-500/20 bg-black px-10 py-5 text-sm font-semibold uppercase tracking-[0.35em] text-white transition-all duration-500 hover:border-red-500/40">

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                  <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/20 blur-3xl" />

                </div>

                <span className="relative z-10">

                  Más Sobre Nosotros

                </span>

              </button>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
            }}
            viewport={{
              once: true,
            }}
            className="relative"
          >

            {/* Glow */}
            <div className="absolute -inset-10 rounded-full bg-red-500/10 blur-[120px]" />

            {/* Image */}
            <div className="group relative overflow-hidden rounded-[34px] border border-white/10">

              <img
                src="/images/about.webp"
                alt="Detailing Studio"
                className="h-[650px] w-full object-cover transition-all duration-700 group-hover:brightness-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/10 bg-black/30 p-6 backdrop-blur-xl">

                <div className="flex items-center justify-between">

                  <div>

                    <span className="text-[10px] uppercase tracking-[0.35em] text-red-500">

                      Detailingg.lm

                    </span>

                    <h3 className="mt-3 font-[family-name:var(--font-bebas)] text-4xl uppercase leading-none text-white">

                      Calidad Premium

                    </h3>

                  </div>

                  <div className="h-[2px] w-16 bg-red-500" />

                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* BENEFITS */}
        <div className="mt-32">

          {/* Header */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="mb-14 text-center"
          >

            <span className="text-xs uppercase tracking-[0.4em] text-red-500">

              ¿Por Qué Elegirnos?

            </span>

            <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-5xl uppercase leading-none text-white md:text-7xl">

              Calidad, Confianza
              <span className="block">
                y Compromiso
              </span>

            </h2>

            <div className="mx-auto mt-5 h-[2px] w-20 bg-red-500" />

          </motion.div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {benefits.map((benefit, index) => {

              const Icon = benefit.icon;

              return (

                <motion.div
                  key={benefit.title}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-red-500/30"
                >

                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                    <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/20 blur-3xl" />

                  </div>

                  <div className="relative z-10">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10">

                      <Icon
                        size={28}
                        className="text-red-500"
                      />

                    </div>

                    <h3 className="mt-8 font-[family-name:var(--font-bebas)] text-3xl uppercase leading-none text-white">

                      {benefit.title}

                    </h3>

                    <p className="mt-5 text-sm leading-[1.9] text-gray-400">

                      {benefit.description}

                    </p>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>

  );

}