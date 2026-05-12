"use client";

import { useEffect, useState } from "react";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Services from "@/components/Services";
import Works from "@/components/Works";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTAFooter from "@/components/CTAFooter";
import { motion } from "framer-motion";
import Hero from "@/sections/Hero";
import BeforeAfter from "@/sections/BeforeAfter";

export default function Home() {

  const [hideTopBar, setHideTopBar] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      const currentScroll = window.scrollY;

      setHideTopBar(currentScroll > window.innerHeight * 0.7);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <main className="bg-black text-white">

      <CustomCursor />

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
  className="fixed top-0 left-0 z-50 w-full"
>

  <TopBar />

  <Navbar />

</motion.div>

      <Hero />

      <Services />

      <Works />

      <BeforeAfter />

      <About />

      {/* Cinematic Divider */}
      <div className="relative h-px w-full overflow-hidden bg-white/5">

        {/* Red Glow */}
        <div className="absolute left-1/2 top-1/2 h-20 w-[500px] -translate-x-1/2 -translate-y-1/2 bg-red-500/20 blur-3xl" />

        {/* Main Line */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Red Accent */}
        <div className="absolute left-1/2 top-1/2 h-[2px] w-40 -translate-x-1/2 -translate-y-1/2 bg-red-500" />

      </div>

      <Testimonials />

      <CTAFooter />

    </main>
  );
}