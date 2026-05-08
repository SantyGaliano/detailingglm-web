import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Services from "@/components/Services";
import Works from "@/components/Works";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTAFooter from "@/components/CTAFooter";


import Hero from "@/sections/Hero";
import BeforeAfter from "@/sections/BeforeAfter";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <CustomCursor />

      <TopBar />

      <Navbar />

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