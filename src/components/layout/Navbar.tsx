"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { Menu } from "lucide-react";

import Button from "@/components/ui/Button";

import { navigationLinks } from "@/constants/navigation";

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

      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 30);

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

    <header
      className={`relative z-50 w-full border-b border-white/10 transition-[background-color,backdrop-filter] duration-300 ${
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

          {navigationLinks.map((link) => {

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

          <Button
            variant="primary"
            className="px-6 py-3 text-xs tracking-[0.2em]"
          >

            Reserva tu turno

          </Button>

        </div>

        {/* MOBILE */}
        <button className="text-white md:hidden">

          <Menu size={30} />

        </button>

      </div>

    </header>

  );

}