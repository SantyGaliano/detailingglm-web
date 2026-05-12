import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

import { navigationLinks } from "@/constants/navigation";

export default function Footer() {

  return (

    <footer className="relative overflow-hidden border-t border-white/10 bg-black">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[120px]" />

      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* BRAND */}
          <div>

            <img
              src="/logo/logo.png"
              alt="detailingg.lm"
              className="h-10 w-auto object-contain"
            />

            <p className="mt-6 max-w-sm text-sm leading-[2] text-gray-400">

              Detailing premium enfocado en estética,
              protección y cuidado profesional para tu vehículo.

            </p>

          </div>

          {/* NAVIGATION */}
          <div>

            <h3 className="font-[family-name:var(--font-bebas)] text-2xl uppercase text-white">

              Navegación

            </h3>

            <div className="mt-6 flex flex-col gap-4">

              {navigationLinks.map((link) => (

                <button
                  key={link.href}
                  className="w-fit text-sm uppercase tracking-[0.2em] text-gray-400 transition-colors duration-300 hover:text-red-500"
                >

                  {link.label}

                </button>

              ))}

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="font-[family-name:var(--font-bebas)] text-2xl uppercase text-white">

              Contacto

            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-center gap-4">

                <Phone
                  size={18}
                  className="text-red-500"
                />

                <span className="text-sm text-gray-400">

                  +54 9 11 2345 6789

                </span>

              </div>

              <div className="flex items-center gap-4">

                <Mail
                  size={18}
                  className="text-red-500"
                />

                <span className="text-sm text-gray-400">

                  contacto@detailingglm.com

                </span>

              </div>

              <div className="flex items-center gap-4">

                <MapPin
                  size={18}
                  className="text-red-500"
                />

                <span className="text-sm text-gray-400">

                  Buenos Aires, Argentina

                </span>

              </div>

            </div>

          </div>

          {/* SOCIAL */}
          <div>

            <h3 className="font-[family-name:var(--font-bebas)] text-2xl uppercase text-white">

              Redes

            </h3>

            <div className="mt-6">

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex w-fit items-center gap-4 transition-colors duration-300 hover:text-red-500"
  >

    <FaInstagram
      size={18}
      className="text-red-500"
    />

    <span className="text-sm text-gray-400">

      @detailingg.lm

    </span>

  </a>

</div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-6">

          <p className="text-center text-sm text-gray-500">

                       © 2026 detailingg.lm — Todos los derechos reservados.

          </p>

        </div>

      </div>

    </footer>

  );

}