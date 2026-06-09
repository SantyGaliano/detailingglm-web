"use client";

import { useEffect, useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { testimonials } from "@/data/testimonials";

import SectionTitle from "@/components/ui/SectionTitle";

export default function Testimonials() {

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {

    setActiveIndex((prev) =>
      prev === testimonials.length - 1
        ? 0
        : prev + 1
    );

  };

  const prevSlide = () => {

    setActiveIndex((prev) =>
      prev === 0
        ? testimonials.length - 1
        : prev - 1
    );

  };

  useEffect(() => {

    const interval = setInterval(() => {

      nextSlide();

    }, 4500);

    return () => clearInterval(interval);

  }, [activeIndex]);

  return (

    <section
      id="testimonials"
      className="relative overflow-hidden bg-black py-24"
    >

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[160px]" />

      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.015] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />

      {/* Background Image */}
      <div className="absolute inset-0">

        <img
          src="/images/final.webp"
          alt="Background"
          className="h-full w-full object-cover opacity-45"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-red-900/10 to-black/60" />

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-red-500/15 blur-[140px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

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
            label="Lo Que Dicen Nuestros Clientes"
            title="Su Satisfacción, Nuestra Mejor Garantía"
          />

        </motion.div>

        {/* TESTIMONIAL CARD */}
        <div className="relative mx-auto max-w-5xl">

          <AnimatePresence mode="popLayout">

            <motion.div
              data-cursor
              key={activeIndex}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -40,
                scale: 0.98,
              }}
              transition={{
                duration: 0.5,
              }}
className="relative min-h-[420px] overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl md:min-h-0"            >

              {/* Glow */}
              <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-red-500/10 blur-3xl" />

              {/* Quote Icon */}
              <div className="absolute right-8 top-8 opacity-10">

                <Quote
                  size={120}
                  className="text-red-500"
                />

              </div>

              <div className="relative z-10">

                {/* Stars */}
                <div className="flex items-center gap-2">

                  {[...Array(5)].map((_, i) => (

                    <Star
                      key={i}
                      size={18}
                      className="fill-red-500 text-red-500"
                    />

                  ))}

                </div>

                {/* Text */}
                <p className="mt-8 max-w-3xl text-xl leading-[2] text-gray-200 md:text-2xl">

                  “{testimonials[activeIndex].text}”

                </p>

                {/* User */}
                <div className="mt-10 flex items-center gap-5">

                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="h-16 w-16 rounded-full border border-white/10 object-cover"
                  />

                  <div>

                    <h3 className="font-semibold text-white">

                      {testimonials[activeIndex].name}

                    </h3>

                    <span className="text-sm uppercase tracking-[0.25em] text-red-500">

                      {testimonials[activeIndex].role}

                    </span>

                  </div>

                </div>

              </div>

            </motion.div>

          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-center gap-5">

            <button
              onClick={prevSlide}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white backdrop-blur-xl transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10"
            >

              <ChevronLeft size={22} />

            </button>

            {/* Dots */}
            <div className="flex items-center gap-3">

              {testimonials.map((_, index) => (

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
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white backdrop-blur-xl transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10"
            >

              <ChevronRight size={22} />

            </button>

          </div>

        </div>

      </div>

    </section>

  );

}