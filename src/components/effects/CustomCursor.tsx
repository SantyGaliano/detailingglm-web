"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

export default function CustomCursor() {

  const [mounted, setMounted] =
    useState(false);

  const [position, setPosition] =
    useState({
      x: 0,
      y: 0,
    });

  const [isPointer, setIsPointer] =
    useState(false);

  useEffect(() => {

    setMounted(true);

    const moveCursor = (
      e: MouseEvent
    ) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const target =
        e.target as HTMLElement;

      const interactive =
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("[data-cursor]");

      setIsPointer(
        !!interactive
      );

    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    return () => {

      window.removeEventListener(
        "mousemove",
        moveCursor
      );

    };

  }, []);

  if (!mounted) {

    return null;

  }

  return (

    <motion.div
      animate={{
        x: position.x - 14,
        y: position.y - 14,
        scale: isPointer ? 2.3 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[999999]
        hidden
        h-8
        w-8
        rounded-full
        border
        border-white/30
        bg-red-500/[0.12]
        lg:block
      "
      style={{
        willChange: "transform",
      }}
    >

      {/* INNER DOT */}
      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500" />

      {/* GLOW */}
      <div className="absolute inset-0 rounded-full bg-red-500/25 blur-xl" />

    </motion.div>

  );

}