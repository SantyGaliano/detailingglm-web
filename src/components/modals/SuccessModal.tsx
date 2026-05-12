"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { Check } from "lucide-react";

export default function SuccessModal() {

  const [open, setOpen] =
    useState(false);

  useEffect(() => {

    const handleSuccess = () => {

      setOpen(true);

    };

    window.addEventListener(
      "booking-success",
      handleSuccess
    );

    return () => {

      window.removeEventListener(
        "booking-success",
        handleSuccess
      );

    };

  }, []);

  useEffect(() => {

    document.body.style.overflow =
      open ? "hidden" : "auto";

  }, [open]);

  if (typeof window === "undefined") {

    return null;

  }

  return createPortal(

    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed inset-0 z-[99999]
            flex items-center justify-center
            bg-black/70
            backdrop-blur-md
            px-6
          "
        >

          {/* Backdrop */}
          <div
            onClick={() =>
              setOpen(false)
            }
            className="absolute inset-0"
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              relative z-10
              w-[540px]
              mt-0
              rounded-[32px]
              border border-white/10
              bg-[#050505]
              px-7 py-16 md:px-9 md:py-20
              overflow-hidden
            "
          >

            {/* Glow */}
            <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[120px]" />

            {/* Texture */}
            <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />

            <div className="relative z-10 text-center">

              {/* Icon */}
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[28px] border border-red-500/20 bg-red-500/10">

                <Check
                  size={52}
                  className="text-red-500"
                />

              </div>

              {/* Label */}
              <p className="mt-8 text-sm uppercase tracking-[0.4em] text-red-500">

                Solicitud Enviada

              </p>

              {/* Title */}
              <h2 className="mt-4 whitespace-nowrap font-bebas text-[52px] md:text-[90px] uppercase leading-[0.9] text-white">

                Todo Listo

              </h2>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-[520px] text-lg leading-[1.8] text-gray-400">

                Recibimos correctamente tu solicitud.
                Nuestro equipo se pondrá en contacto
                con vos lo antes posible.

              </p>

              {/* Button */}
              <button
                onClick={() =>
                  setOpen(false)
                }
                className="
                  group relative
                  mt-10
                  inline-flex
                  h-16
                  items-center
                  justify-center
                  overflow-hidden
                  bg-white
                  px-14
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-black
                  transition-all duration-500
                  hover:scale-[1.02]
                "
              >

                <div className="absolute inset-0 bg-red-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="relative z-10 group-hover:text-white">

                  Continuar Navegando

                </span>

              </button>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>,

    document.body

  );

}