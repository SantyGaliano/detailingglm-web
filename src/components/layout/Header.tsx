"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";

export default function Header() {

  const [hideTopBar, setHideTopBar] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      const currentScroll = window.scrollY;

      setHideTopBar(
        currentScroll > window.innerHeight * 0.7
      );

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <motion.div
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: hideTopBar ? -44 : 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="pointer-events-none fixed left-0 top-0 z-50 w-full"
    >

      <TopBar />

      <Navbar />

    </motion.div>

  );

}