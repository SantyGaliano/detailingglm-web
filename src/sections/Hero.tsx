"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Hero() {

  const mouseX = useMotionValue(0);

  const mouseY = useMotionValue(0);

  const backgroundX = useTransform(mouseX, [-500, 500], [-2, 2]);

  const backgroundY = useTransform(mouseY, [-500, 500], [-2, 2]);

  const glowX = useTransform(mouseX, [-500, 500], [-4, 4]);

  const glowY = useTransform(mouseY, [-500, 500], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {

    const { clientX, clientY } = e;

    const centerX = window.innerWidth / 2;

    const centerY = window.innerHeight / 2;

    mouseX.set(clientX - centerX);

    mouseY.set(clientY - centerY);

  };

  return (

   <section
  id="home"
  className="relative flex min-h-screen overflow-hidden bg-black"
>

      {/* VIDEO BACKGROUND */}
      <motion.div
        style={{
          x: backgroundX,
          y: backgroundY,
        }}
        className="gpu absolute inset-0 scale-[1.03]"
      >

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        >

          <source
            src="/videos/Hero Page (1) (1) (1).mp4"
            type="video/mp4"
          />

        </video>

      </motion.div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />

      {/* AMBIENT GLOW */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-red-500/10 blur-[60px]"
      />

      {/* VIGNETTE */}
      <div className="absolute inset-0 shadow-[inset_0_0_250px_rgba(0,0,0,0.9)]" />

      {/* CONTENT */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl items-center px-6 pt-36 pb-24 lg:px-10">

        <motion.div
          initial={{
  opacity: 0,
  y: 40,
}}
animate={{
  opacity: 1,
  y: 0,
}}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >

          {/* LABEL */}
          <div className="mb-4 flex items-center gap-5">

            <div className="flex items-center gap-3">

              <div className="h-[1px] w-10 bg-red-500" />

              <span className="text-xs uppercase tracking-[0.35em] text-red-500">

                Detailing Profesional

              </span>

            </div>

          </div>

          {/* TITLE */}
          <h1 className="max-w-4xl font-[family-name:var(--font-bebas)] text-[72px] uppercase leading-[0.88] tracking-[0.01em] text-white md:text-[92px] lg:text-[120px]">

            CUIDAMOS TU AUTO

            <span className="block text-white">
              COMO SI FUERA
            </span>

            <span className="block text-red-500">
              NUESTRO.
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="mt-4 max-w-xl font-[family-name:var(--font-inter)] text-[15px] leading-[1.9] text-gray-300 md:text-[16px]">

            En detailingg.lm brindamos servicios de lavado y detailing
            profesional para que tu auto luzca siempre impecable,
            con un cuidado integral que resalta su estética
            y protege cada detalle.

          </p>

          {/* BUTTONS */}
          <div className="mt-3 flex flex-wrap items-center gap-4">

            <button className="bg-red-500 px-8 py-4 text-sm font-bold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:scale-[1.03] hover:bg-red-600">

              Reservar Turno

            </button>

            <button className="border border-white/15 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.25em] text-white bg-black/40 transition-all duration-300 hover:border-white hover:bg-white hover:text-black">

              Ver Trabajos

            </button>

          </div>

        </motion.div>

      </div>

      {/* Bottom Shadow */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />

    </section>

  );
}