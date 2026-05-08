"use client";

import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-[36px] z-50 w-full bg-black/60 backdrop-blur-2xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        <div>
          <img
    src="/logo/logo.png"
    alt="detailingg.lm"
    className="h-8 w-auto object-contain"
  />
        </div>

        <nav className="hidden items-center gap-10 md:flex">

          <a
            href="#"
            className="text-sm uppercase tracking-widest text-white transition hover:text-red-500"
          >
            Inicio
          </a>

          <a
            href="#"
            className="text-sm uppercase tracking-widest text-white transition hover:text-red-500"
          >
            Servicios
          </a>

          <a
            href="#"
            className="text-sm uppercase tracking-widest text-white transition hover:text-red-500"
          >
            Trabajos
          </a>

          <a
            href="#"
            className="text-sm uppercase tracking-widest text-white transition hover:text-red-500"
          >
            Nosotros
          </a>

          <a
            href="#"
            className="text-sm uppercase tracking-widest text-white transition hover:text-red-500"
          >
            Contacto
          </a>

        </nav>

        <div className="hidden md:block">

          <button className="bg-red-500 px-6 py-3 text-sm font-bold uppercase tracking-wider transition hover:bg-red-600">
            Reserva tu turno
          </button>

        </div>

        <button className="md:hidden">
          <Menu size={30} />
        </button>

      </div>

    </header>
  );
}