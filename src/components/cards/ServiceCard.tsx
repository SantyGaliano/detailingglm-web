"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: ServiceCardProps) {

  return (

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

        {title}

      </h3>

      {/* Description */}
      <p className="relative z-10 mt-4 text-sm leading-[1.9] text-gray-400">

        {description}

      </p>

    </motion.div>

  );

}