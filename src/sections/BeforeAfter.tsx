"use client";

import { useEffect, useRef, useState } from "react";

export default function BeforeAfter() {

  const containerRef = useRef<HTMLDivElement>(null);

  const [sliderPosition, setSliderPosition] = useState(50);

  const [isDragging, setIsDragging] = useState(false);

  const updateSlider = (clientX: number) => {

    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const x = clientX - rect.left;

    const percentage = (x / rect.width) * 100;

    setSliderPosition(Math.min(100, Math.max(0, percentage)));

  };

  const handleMouseMove = (e: MouseEvent) => {

    if (!isDragging) return;

    updateSlider(e.clientX);

  };

  const handleTouchMove = (e: TouchEvent) => {

    if (!isDragging) return;

    updateSlider(e.touches[0].clientX);

  };

  useEffect(() => {

    const stopDragging = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);

    window.addEventListener("mouseup", stopDragging);

    window.addEventListener("touchmove", handleTouchMove);

    window.addEventListener("touchend", stopDragging);

    return () => {

      window.removeEventListener("mousemove", handleMouseMove);

      window.removeEventListener("mouseup", stopDragging);

      window.removeEventListener("touchmove", handleTouchMove);

      window.removeEventListener("touchend", stopDragging);

    };

  }, [isDragging]);

  return (

    <section
  id="before-after"
  className="relative h-screen overflow-hidden bg-black"
>

      {/* Background Container */}
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden"
      >

        {/* DIRTY IMAGE BASE */}
        <img
          src="/images/car-before.webp"
          alt="Before"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* CLEAN REVEAL */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{
            width: `${sliderPosition}%`,
          }}
        >

          <img
            src="/images/car-after.webp"
            alt="After"
            className="absolute inset-0 h-full w-full object-cover"
          />

        </div>

        {/* OVERLAYS */}
<div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-red-500/10 blur-[180px]" />

        {/* SLIDER LINE */}
        <div
          className="absolute top-0 z-10 h-full w-[2px] bg-white/70"
          style={{
            left: `${sliderPosition}%`,
            transform: "translateX(-50%)",
          }}
        >

          {/* GLOW */}
          <div className="absolute left-1/2 top-[80%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/20 blur-3xl" />

          {/* HANDLE */}
          <div
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            className="absolute left-1/2 top-[80%] z-40 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-grab items-center justify-center rounded-full border border-white/20 bg-black/70 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-red-500/60 active:cursor-grabbing"
          >

            <div className="flex items-center gap-[3px]">

              <div className="h-5 w-[2px] bg-white" />

              <div className="h-5 w-[2px] bg-white" />

            </div>

          </div>

        </div>

        {/* LABELS */}
        <div className="absolute bottom-10 left-10 z-30">

          <span className="border border-white/10 bg-black/40 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-white backdrop-blur-md">

            Después

          </span>

        </div>

        <div className="absolute bottom-10 right-10 z-30">

          <span className="border border-white/10 bg-black/40 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-white backdrop-blur-md">

            Antes

          </span>

        </div>

      </div>

      {/* Content */}
      <div className="pointer-events-none relative z-30 flex h-full items-center justify-center">

        <div className="text-center">

          <span className="mb-5 inline-block border border-red-500/20 bg-red-500/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-red-500 backdrop-blur-md">

            Transformación Real

          </span>

          <h2 className="font-[family-name:var(--font-bebas)] text-5xl uppercase leading-none text-white md:text-7xl">

            Antes y Después

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-[1.9] text-gray-300 md:text-base">

            Deslizá el comparador y descubrí la diferencia entre un vehículo sin tratamiento y un detailing profesional realizado por detailingg.lm.

          </p>

        </div>

      </div>

    </section>

  );

}