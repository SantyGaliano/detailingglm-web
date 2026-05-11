"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const links = [
  { label: "Inicio", href: "home" },
  { label: "Servicios", href: "services" },
  { label: "Trabajos", href: "works" },
  { label: "Nosotros", href: "about" },
  { label: "Opiniones", href: "testimonials" },
  { label: "Contacto", href: "contact" },
];

export default function Navbar() {

  const [activeSection, setActiveSection] = useState("home");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const sections = document.querySelectorAll("section[id], footer[id]");

    const observer = new IntersectionObserver(
      (entries) => {

        const visibleSection = entries
  .filter((entry) => entry.isIntersecting)
  .sort(
    (a, b) => b.intersectionRatio - a.intersectionRatio
  )[0];

if (visibleSection) {
  setActiveSection(visibleSection.target.id);
}

      },
      {
        threshold: 0.2,
rootMargin: "-100px 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {

      sections.forEach((section) => observer.unobserve(section));

    };

  }, []);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 30);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollToSection = (id: string) => {

    const element = document.getElementById(id);

    if (!element) return;

    const navbarOffset = 120;

    const offsetTop =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      navbarOffset;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });

  };

  return (

    <motion.header
    style={{
    willChange: "transform",
  }}
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className={`fixed top-[36px] z-50 w-full border-b border-white/10 transition-all duration-500 ${
  scrolled
    ? "bg-black/75 backdrop-blur-md"
    : "bg-black/30 backdrop-blur-sm"
}`}
    >

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* LOGO */}
        <button
          onClick={() => scrollToSection("home")}
          className="transition-all duration-300 hover:scale-105"
        >

          <img
            src="/logo/logo.png"
            alt="detailingg.lm"
            className="h-8 w-auto object-contain"
          />

        </button>

        {/* NAVIGATION */}
        <nav className="hidden items-center gap-10 md:flex">

          {links.map((link) => {

            const isActive = activeSection === link.href;

            return (

              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="group relative"
              >

                <span
                  className={`text-sm uppercase tracking-widest transition-all duration-300 ${
                    isActive
                      ? "text-red-500"
                      : "text-white hover:text-red-500"
                  }`}
                >

                  {link.label}

                </span>

                {/* ACTIVE INDICATOR */}
                <motion.div
                  layoutId="navbar-indicator"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                  className={`absolute -bottom-2 left-0 h-[2px] bg-red-500 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />

              </button>

            );

          })}

        </nav>

        {/* CTA */}
        <div className="hidden md:block">

          <button
            onClick={() => scrollToSection("contact")}
            className="bg-red-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:bg-red-600"
          >

            Reserva tu turno

          </button>

        </div>

        {/* MOBILE */}
        <button className="text-white md:hidden">

          <Menu size={30} />

        </button>

      </div>

    </motion.header>

  );

}