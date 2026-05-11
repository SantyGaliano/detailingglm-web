"use client";

import {
  ShieldCheck,
  Sparkles,
  Car,
  Sofa,
  Wrench,
  Droplets,
} from "lucide-react";

import { motion } from "framer-motion";

const services = [
  {
    icon: Car,
    title: "Lavado Premium",
    description:
      "Lavado exterior e interior con productos de alta calidad para un acabado impecable.",
  },
  {
    icon: Sparkles,
    title: "Pulido y Encerado",
    description:
      "Recuperamos el brillo original y protegemos la pintura con tratamientos profesionales.",
  },
  {
    icon: ShieldCheck,
    title: "Protección Cerámica",
    description:
      "Máxima protección y brillo duradero con recubrimientos cerámicos premium.",
  },
  {
    icon: Sofa,
    title: "Limpieza de Tapizados",
    description:
      "Eliminamos manchas y olores para dejar el interior como nuevo.",
  },
  {
    icon: Wrench,
    title: "Limpieza de Motor",
    description:
      "Limpieza profunda y segura del compartimiento del motor.",
  },
  {
    icon: Droplets,
    title: "Detailing Completo",
    description:
      "Servicio integral para un acabado impecable tanto interior como exterior.",
  },
];

export default function Services() {

  return (

    <section
  id="services"
  className="relative overflow-hidden bg-black py-5"
>

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[140px]" />

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
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
          className="mb-20 text-center"
        >

          <span className="text-xs uppercase tracking-[0.4em] text-red-500">

            Servicios

          </span>

          <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-5xl uppercase leading-none text-white md:text-7xl">

            ¿Qué Hacemos?

          </h2>

          <div className="mx-auto mt-5 h-[2px] w-20 bg-red-500" />

        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-500/30 hover:bg-white/[0.05]"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-500/10 blur-3xl" />

                </div>

                {/* Icon */}
                <div className="relative z-10 mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 transition-all duration-500 group-hover:scale-110 group-hover:border-red-500/40 group-hover:bg-red-500/15">

                  <Icon
                    size={38}
                    className="text-red-500"
                  />

                </div>

                {/* Title */}
                <h3 className="relative z-10 font-[family-name:var(--font-bebas)] text-3xl uppercase tracking-[0.03em] text-white">

                  {service.title}

                </h3>

                {/* Description */}
                <p className="relative z-10 mt-4 text-sm leading-[1.9] text-gray-400">

                  {service.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>

  );

}