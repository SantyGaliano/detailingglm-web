"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

const works = [
  {
  image: "/images/pulido1.png",
  title: "Pulido Profesional",
  number: "01",
},
  {
    image: "/images/interior.png",
    title: "Interior Detallado",
    number: "02",
  },
  {
    image: "/images/exterior.png",
    title: "Detailing Exterior",
    number: "03",
  },
  {
    image: "/images/ceramica1.png",
    title: "Protección Cerámica",
    number: "05",
  },
];

export default function Works() {

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {

    setActiveIndex((prev) =>
      prev === works.length - 1 ? 0 : prev + 1
    );

  };

  const prevSlide = () => {

    setActiveIndex((prev) =>
      prev === 0 ? works.length - 1 : prev - 1
    );

  };

  useEffect(() => {

    const interval = setInterval(() => {

      nextSlide();

    }, 3000);

    return () => clearInterval(interval);

  }, [activeIndex]);

  const getPrevIndex = () => {

    return activeIndex === 0
      ? works.length - 1
      : activeIndex - 1;

  };

  const getNextIndex = () => {

    return activeIndex === works.length - 1
      ? 0
      : activeIndex + 1;

  };

  return (

    <section className="relative overflow-hidden bg-black py-24">

      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[140px]" />

      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="relative z-10 mx-auto max-w-[1700px]">

        {/* HEADER */}
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
          className="mb-16 text-center"
        >

          <span className="text-xs uppercase tracking-[0.4em] text-red-500">

            Trabajos Realizados

          </span>

          <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-5xl uppercase leading-none text-white md:text-7xl">

            Resultados Que Hablan

            <span className="block">
              Por Sí Solos
            </span>

          </h2>

          <div className="mx-auto mt-5 h-[2px] w-20 bg-red-500" />

        </motion.div>

        {/* SLIDER */}
        <div className="relative flex items-center justify-center overflow-hidden px-6">

          {/* LEFT PREVIEW */}
          <div className="absolute left-[-8%] top-1/2 hidden h-[500px] w-[320px] -translate-y-1/2 overflow-hidden rounded-[30px] border border-white/10 opacity-40 lg:block">

            <img
              src={works[getPrevIndex()].image}
              alt=""
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

          </div>

          {/* RIGHT PREVIEW */}
          <div className="absolute right-[-8%] top-1/2 hidden h-[500px] w-[320px] -translate-y-1/2 overflow-hidden rounded-[30px] border border-white/10 opacity-40 lg:block">

            <img
              src={works[getNextIndex()].image}
              alt=""
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

          </div>

          {/* MAIN CARD */}
          <AnimatePresence mode="wait">

            <motion.div
              key={activeIndex}
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.5,
              }}
              className="group relative h-[620px] w-full max-w-[950px] overflow-hidden rounded-[34px] border border-red-500/20"
            >

              {/* IMAGE */}
              <img
                src={works[activeIndex].image}
                alt={works[activeIndex].title}
                className="h-full w-full object-cover transition-all duration-700 group-hover:brightness-110"
              />

              {/* OVERLAYS */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              <div className="absolute inset-0 bg-red-500/[0.03]" />

              {/* TOP BUTTON */}
              <div className="absolute right-6 top-6 z-20">

                <button className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10">

                  <ArrowUpRight size={22} />

                </button>

              </div>

              {/* CONTENT */}
              <div className="absolute bottom-6 left-6 right-6 z-20 rounded-[26px] border border-white/10 bg-black/30 p-8 backdrop-blur-xl">

                <div className="flex items-center justify-between">

                  <div>

                    <span className="text-[10px] uppercase tracking-[0.35em] text-red-500 opacity-0 transition-all duration-500 group-hover:opacity-100">

                      Detailingg.lm

                    </span>

                    <div className="mt-4 flex items-center gap-5">

                      <h3 className="font-[family-name:var(--font-bebas)] text-5xl uppercase leading-none text-white">

                        {works[activeIndex].title}

                      </h3>

                      <div className="mt-2 h-[2px] w-16 bg-red-500" />

                    </div>

                  </div>

                  <span className="font-[family-name:var(--font-bebas)] text-4xl text-red-500/70">

                    {works[activeIndex].number}

                  </span>

                </div>

              </div>

            </motion.div>

          </AnimatePresence>

        </div>

        {/* NAVIGATION */}
        <div className="mt-10 flex items-center justify-center gap-5">

          {/* LEFT */}
          <button
            onClick={prevSlide}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white backdrop-blur-xl transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10"
          >

            <ChevronLeft size={22} />

          </button>

          {/* DOTS */}
          <div className="flex items-center gap-3">

            {works.map((_, index) => (

              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  activeIndex === index
                    ? "w-10 bg-red-500"
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
              />

            ))}

          </div>

          {/* RIGHT */}
          <button
            onClick={nextSlide}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white backdrop-blur-xl transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10"
          >

            <ChevronRight size={22} />

          </button>

        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">

          <button className="group relative overflow-hidden border border-red-500/20 bg-black px-12 py-5 text-sm font-semibold uppercase tracking-[0.35em] text-white transition-all duration-500 hover:border-red-500/40">

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/20 blur-3xl" />

            </div>

            <span className="relative z-10 flex items-center gap-4">

              Ver Más Trabajos

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </span>

          </button>

        </div>

      </div>

    </section>

  );

}