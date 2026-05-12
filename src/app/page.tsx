import Header from "@/components/layout/Header";

import CustomCursor from "@/components/effects/CustomCursor";
import WhatsAppWidget from "@/components/widgets/WhatsAppWidget";

import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Works from "@/sections/Works";
import BeforeAfter from "@/sections/BeforeAfter";
import About from "@/sections/About";
import Testimonials from "@/sections/Testimonials";
import CTASection from "@/sections/CTASection";

import Footer from "@/components/layout/Footer";

export default function Home() {

  return (

    <main className="bg-black text-white">

      <CustomCursor />

      <WhatsAppWidget />

      <Header />

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

      <CTASection />

      <Footer />

    </main>

  );

}