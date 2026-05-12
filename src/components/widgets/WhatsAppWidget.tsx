"use client";

import { useEffect, useState } from "react";

import { FaWhatsapp } from "react-icons/fa";

import { X } from "lucide-react";

export default function WhatsAppWidget() {

  const [isVisible, setIsVisible] = useState(false);

  const [isBubbleVisible, setIsBubbleVisible] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setIsVisible(true);

    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  return (

    <div className="fixed bottom-5 right-5 z-[999] flex flex-col items-end gap-3">

      {/* Bubble */}
      {isBubbleVisible && (

        <div
          className={`relative max-w-[270px] rounded-[24px] border border-white/10 bg-white p-4 shadow-2xl transition-all duration-500 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >

          {/* Close */}
          <button
            onClick={() => setIsBubbleVisible(false)}
            className="absolute right-3 top-3 text-gray-400 transition-colors duration-300 hover:text-black"
          >

            <X size={15} />

          </button>

          {/* Content */}
          <div className="pr-5">

            <h3 className="text-[17px] font-semibold text-gray-900">

              ¿Necesitás ayuda?

            </h3>

            <p className="mt-1 text-[14px] leading-relaxed text-gray-500">

              Escribinos por WhatsApp.
              Respondemos rápido.

            </p>

          </div>

        </div>

      )}

      {/* Floating Button */}
      <a
        href="https://wa.me/5491123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_15px_40px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110"
      >

        <FaWhatsapp
          size={34}
          className="text-white transition-transform duration-300 group-hover:scale-110"
        />

      </a>

    </div>

  );

}