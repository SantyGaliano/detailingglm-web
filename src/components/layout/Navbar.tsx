"use client";

import { usePathname, useRouter } from "next/navigation";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { Menu } from "lucide-react";

import Button from "@/components/ui/Button";

import { useBookingModal } from "@/store/useBookingModal";

import { navigationLinks } from "@/constants/navigation";

import MobileMenu from "@/components/layout/MobileMenu";

import { useMobileMenu } from "@/store/useMobileMenu";

export default function Navbar() {

  const [activeSection, setActiveSection] = useState("home");

  const [scrolled, setScrolled] = useState(false);

  const {
  isOpen: mobileMenuOpen,
  open: openMobileMenu,
  close: closeMobileMenu,
} = useMobileMenu();

  const { open } = useBookingModal();

  const pathname = usePathname();

const router = useRouter();

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

const navigateToSection = (
  section: string,
  path: string
) => {

  // Trabajos
if (section === "works") {

  // Si estamos en Home → scroll
  if (pathname === "/") {

    const element =
      document.getElementById("works");

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

    return;

  }

  // Si estamos fuera del Home
  router.push("/trabajos");

  return;

}

  // Si NO estamos en Home
  if (pathname !== "/") {

    router.push(`/#${section}`);

    return;

  }

  // Scroll interno Home
  const element =
    document.getElementById(section);

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
      className={`pointer-events-auto relative z-50 w-full border-b border-white/10 transition-[background-color,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-black/75 backdrop-blur-md"
          : "bg-black/30 backdrop-blur-sm"
      }`}
    >

     <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* LOGO */}
        <button
  onClick={() => router.push("/")}
  className="transition-all duration-300 hover:scale-105"
>

          <img
            src="/logo/logo.png"
            alt="detailingg.lm"
            className="h-8 w-auto object-contain"
          />

        </button>

        {/* NAVIGATION */}
        <nav className="hidden flex-1 items-center justify-center gap-10 md:flex">

          {navigationLinks.map((link) => {

            const isActive =
  activeSection === link.section;

            return (

              <button
                key={link.section}
                onClick={() =>
  navigateToSection(
    link.section,
    link.path
  )
}
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
        <div className="-mr-4 hidden md:block lg:-mr-8">

          <Button
  onClick={open}
  variant="primary"
  className="px-6 py-3 text-xs tracking-[0.2em]"
>

            Reserva tu turno

          </Button>

        </div>

        {/* MOBILE */}
        <button
  onClick={openMobileMenu}
  className="text-white md:hidden"
>
  <Menu size={30} />
</button>

      </div>

      <MobileMenu
  open={mobileMenuOpen}
  onClose={closeMobileMenu}
/>

    </header>

  );

}