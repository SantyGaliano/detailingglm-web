"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { works } from "@/data/works";

import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Works() {

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () =>

    setActiveIndex((prev) =>
      prev === works.length - 1 ? 0 : prev + 1
    );

  const prevSlide = () =>

    setActiveIndex((prev) =>
      prev === 0 ? works.length - 1 : prev - 1
    );

  useEffect(() => {

    const interval = setInterval(() => {

      setActiveIndex((prev) =>
        prev === works.length - 1 ? 0 : prev + 1
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  const getPrevIndex = () =>
    activeIndex === 0
      ? works.length - 1
      : activeIndex - 1;

  const getNextIndex = () =>
    activeIndex === works.length - 1
      ? 0
      : activeIndex + 1;

  return (

    <section
      id="works"
      className="relative overflow-hidden bg-black py-24"
    >

      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[140px]" />

      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="relative z-10 mx-auto max-w-[1700px]">

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
          className="mb-16"
        >

          <SectionTitle
            label="Trabajos Realizados"
            title="Resultados Que Hablan Por Sí Solos"
          />

        </motion.div>

        {/* Slider */}
        <div className="relative flex items-center justify-center overflow-hidden px-6">

          {/* Left Preview */}
          <div className="absolute left-[-6%] top-1/2 hidden h-[430px] w-[280px] -translate-y-1/2 overflow-hidden rounded-[30px] border border-white/10 opacity-40 lg:block">

            <Image
              src={works[getPrevIndex()].image}
              alt=""
              fill
              className="object-cover"
              sizes="280px"
            />

            <div className="absolute inset-0 bg-black/50" />

          </div>

          {/* Right Preview */}
          <div className="absolute right-[-6%] top-1/2 hidden h-[430px] w-[280px] -translate-y-1/2 overflow-hidden rounded-[30px] border border-white/10 opacity-40 lg:block">

            <Image
              src={works[getNextIndex()].image}
              alt=""
              fill
              className="object-cover"
              sizes="280px"
            />

            <div className="absolute inset-0 bg-black/50" />

          </div>

          {/* Main Card */}
          <AnimatePresence mode="wait">

            <motion.div
              data-cursor
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
              className="group relative h-[540px] w-full max-w-[860px] overflow-hidden rounded-[34px] border border-red-500/20"
            >

              <Image
                src={works[activeIndex].image}
                alt={works[activeIndex].title}
                fill
                className="object-cover transition-all duration-700 group-hover:brightness-110"
                sizes="860px"
                priority={activeIndex === 0}
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              <div className="absolute inset-0 bg-red-500/[0.03]" />

              {/* Top Button */}
              <div className="absolute right-6 top-6 z-20">

                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10">

                  <ArrowUpRight size={20} />

                </button>

              </div>

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 z-20 rounded-[26px] border border-white/10 bg-black/30 p-6 backdrop-blur-xl">

                <div className="flex items-center justify-between">

                  <div>

                    <span className="text-[10px] uppercase tracking-[0.35em] text-red-500 opacity-0 transition-all duration-500 group-hover:opacity-100">

                      Detailingg.lm

                    </span>

                    <div className="mt-4 flex items-center gap-5">

                      <h3 className="font-[family-name:var(--font-bebas)] text-4xl uppercase leading-none text-white md:text-5xl">

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

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-center gap-5">

          <button
            onClick={prevSlide}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white backdrop-blur-xl transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10"
          >

            <ChevronLeft size={20} />

          </button>

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

          <button
            onClick={nextSlide}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white backdrop-blur-xl transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10"
          >

            <ChevronRight size={20} />

          </button>

        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">

          <Button variant="secondary">

            <span className="flex items-center gap-4">

              Ver Más Trabajos

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </span>

          </Button>

        </div>

      </div>

    </section>

  );

}