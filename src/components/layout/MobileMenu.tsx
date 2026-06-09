"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const links = [
  { label: "Inicio", section: "home" },
  { label: "Servicios", section: "services" },
  { label: "Trabajos", section: "works" },
  { label: "Nosotros", section: "about" },
  { label: "Opiniones", section: "testimonials" },
  { label: "FAQ", section: "faq" },
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {

  const navigate = (section: string) => {

    const element =
      document.getElementById(section);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    onClose();

  };

  return (

    <AnimatePresence>

      {open && (

        <motion.div
          style={{
            position: "fixed",
            inset: 0,
            width: "100vw",
            height: "100vh",
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="
            fixed
            left-0
            top-0
            z-[9999]
            h-screen
            w-screen
            bg-black
          "
        >

          <button
            onClick={onClose}
            className="absolute right-6 top-7 text-white"
          >

            <X size={32} />

          </button>

          <div className="flex h-full flex-col">

            <div className="flex flex-1 flex-col items-center justify-center gap-8">

              {links.map((link) => (

                <button
                  key={link.section}
                  onClick={() =>
                    navigate(link.section)
                  }
                  className="font-[family-name:var(--font-bebas)] text-5xl uppercase text-white transition-colors duration-300 hover:text-red-500"
                >

                  {link.label}

                </button>

              ))}

            </div>

            <div className="flex justify-center pb-12">

              <img
                src="/logo/logo.png"
                alt="detailingg.lm"
                className="h-8 w-auto object-contain"
              />

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>

  );

}