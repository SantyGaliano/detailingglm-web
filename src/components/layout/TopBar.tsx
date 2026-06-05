"use client";
import { FaInstagram } from "react-icons/fa";
import {
  Clock3,
  MapPin,
  Phone,
} from "lucide-react";

export default function TopBar() {

  return (

   <div className="pointer-events-auto hidden w-full border-b border-white/5 bg-black/95 backdrop-blur-md lg:block">

      <div className="mx-auto flex h-[44px] max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Left */}
        <div className="-ml-6 flex items-center gap-8 lg:-ml-10">

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
        <div className="-mr-4 flex items-center gap-6 lg:-mr-8">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gray-400">

            <Phone size={13} className="text-red-500" />

            <span>
              +54 9 11 2345 6789
            </span>

          </div>

          {/* Instagram */}
         <a
  href="https://www.instagram.com/detailingg.lm/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 transition-colors duration-300"
>

  <FaInstagram
    size={15}
    className="text-red-500"
  />

  <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400 transition-colors duration-300 hover:text-white">
    @detailingg.lm
  </span>

</a>

        </div>

      </div>

    </div>
  );
}