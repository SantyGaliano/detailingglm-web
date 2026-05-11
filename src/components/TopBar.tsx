"use client";

import {
  Clock3,
  MapPin,
  Phone,
} from "lucide-react";

export default function TopBar() {

  return (

    <div className="hidden w-full border-b border-white/5 bg-black/95 backdrop-blur-md lg:block">

      <div className="mx-auto flex h-[44px] max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Left */}
        <div className="flex items-center gap-8">

          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gray-400">

            <MapPin size={13} className="text-red-500" />

            <span>
              Buenos Aires, Argentina
            </span>

          </div>

          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gray-400">

            <Clock3 size={13} className="text-red-500" />

            <span>
              Lun - Sáb: 8:00 - 19:00
            </span>

          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-6">

          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gray-400">

            <Phone size={13} className="text-red-500" />

            <span>
              +54 9 11 2345 6789
            </span>

          </div>

          {/* Instagram */}
          <a
            href="#"
            className="text-red-500 transition-colors duration-300 hover:text-white"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                ry="5"
              />

              <path d="M16 11.37a4 4 0 1 1-7.999.001A4 4 0 0 1 16 11.37z" />

              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>

          </a>

        </div>

      </div>

    </div>
  );
}