"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {

    const moveCursor = (e: MouseEvent) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const target = e.target as HTMLElement;

      const clickable =
        target.closest("button") ||
        target.closest("a");

      setIsPointer(!!clickable);

    };

    window.addEventListener("mousemove", moveCursor);

    return () => {

      window.removeEventListener("mousemove", moveCursor);

    };

  }, []);

  return (

    <motion.div
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isPointer ? 1.8 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 rounded-full border border-red-500/40 bg-red-500/10 backdrop-blur-md lg:block"
    >

      {/* INNER DOT */}
      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500" />

      {/* GLOW */}
      <div className="absolute inset-0 rounded-full bg-red-500/10 blur-md" />

    </motion.div>

  );

}