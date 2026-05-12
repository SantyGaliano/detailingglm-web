"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  Plus,
  Minus,
} from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";

import { faqs } from "@/data/faqs";

export default function FAQ() {

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {

    setActiveIndex(
      activeIndex === index
        ? null
        : index
    );

  };

  return (

    <section
      className="relative overflow-hidden bg-black py-24"
    >

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[160px]" />

      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />

      

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-10">

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
            label="Preguntas Frecuentes"
            title="Todo Lo Que Necesitás Saber"
          />

        </motion.div>

        {/* FAQ LIST */}
        <div className="space-y-5">

          {faqs.map((faq, index) => {

            const isActive = activeIndex === index;

            return (

              <motion.div
                data-cursor
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                className="overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
              >

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                >

                  <h3 className="font-[family-name:var(--font-bebas)] text-2xl uppercase leading-none text-white md:text-3xl">

                    {faq.question}

                  </h3>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10">

                    {isActive ? (

                      <Minus
                        size={20}
                        className="text-red-500"
                      />

                    ) : (

                      <Plus
                        size={20}
                        className="text-red-500"
                      />

                    )}

                  </div>

                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>

                  {isActive && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    >

                      <div className="px-7 pb-7">

                        <p className="max-w-3xl text-sm leading-[2] text-gray-400">

                          {faq.answer}

                        </p>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>

  );

}