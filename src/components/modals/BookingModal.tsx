"use client";

import { toast } from "sonner";
import { createPortal } from "react-dom";

import {
  useEffect,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  X,
  CalendarDays,
} from "lucide-react";

import { useBookingModal } from "@/store/useBookingModal";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BookingModal() {

  const {
    isOpen,
    close,
  } = useBookingModal();

  const [mounted, setMounted] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "",
    message: "",
  });

  useEffect(() => {

    setMounted(true);

  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      if (!form.email.trim()) {

        toast.error(
          "Ingresá un correo electrónico"
        );

        return;

      }

      setLoading(true);

      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(form),
        }
      );

      if (!response.ok) {

        throw new Error(
          "Error al enviar"
        );

      }

     close();

setTimeout(() => {

  window.dispatchEvent(
    new Event("booking-success")
  );

}, 300);

      setForm({
        name: "",
        email: "",
        phone: "",
        vehicle: "",
        service: "",
        message: "",
      });

    } catch (error) {

      toast.error(
        "Ocurrió un error al enviar"
      );

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    if (isOpen) {

      document.body.style.overflow =
        "hidden";

    } else {

      document.body.style.overflow =
        "auto";

    }

    return () => {

      document.body.style.overflow =
        "auto";

    };

  }, [isOpen]);

  if (!mounted) {

    return null;

  }

  return createPortal(

    <>
      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-6 backdrop-blur-md"
          >

            {/* BACKDROP */}
            <div
              onClick={close}
              className="absolute inset-0"
            />

            {/* MODAL */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="relative z-10 w-full max-w-xl overflow-hidden rounded-[34px] border border-white/10 bg-[#050505] p-6 shadow-2xl lg:p-7"
            >

              {/* Glow */}
              <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[120px]" />

              {/* Texture */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />

              {/* Close */}
              <button
                onClick={close}
                className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10"
              >

                <X size={18} />

              </button>

              <div className="relative z-10">

                {/* Header */}
                <div className="flex items-center gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10">

                    <CalendarDays
                      size={30}
                      className="text-red-500"
                    />

                  </div>

                  <div>

                    <span className="text-[11px] uppercase tracking-[0.35em] text-red-500">

                      Reserva Premium

                    </span>

                    <h2 className="mt-2 font-[family-name:var(--font-bebas)] text-5xl uppercase leading-none text-white">

                      Reserva Tu Turno

                    </h2>

                  </div>

                </div>

                {/* Description */}
                <p className="mt-8 max-w-xl text-sm leading-[2] text-gray-400">

                  Completá el formulario y nos pondremos en contacto
                  para coordinar el servicio ideal para tu vehículo.

                </p>

                {/* FORM */}
                <form
                  onSubmit={handleSubmit}
                  className="mt-7 space-y-4"
                >

                  {/* Row */}
                  <div className="grid gap-4 md:grid-cols-2">

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Nombre completo"
                      className="h-14 rounded-none border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-red-500/40"
                    />

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Correo electrónico"
                      className="h-14 rounded-none border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-red-500/40"
                    />

                  </div>

                  {/* Row */}
                  <div className="grid gap-4 md:grid-cols-2">

                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Teléfono"
                      className="h-14 rounded-none border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-red-500/40"
                    />

                    <input
                      type="text"
                      name="vehicle"
                      value={form.vehicle}
                      onChange={handleChange}
                      placeholder="Vehículo"
                      className="h-14 rounded-none border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-red-500/40"
                    />

                  </div>

                  {/* Service */}
                  <Select
                    onValueChange={(value) =>
                      setForm({
                        ...form,
                        service: value,
                      })
                    }
                  >

                    <SelectTrigger
                      className="h-14 w-full rounded-none border border-white/10 bg-white/[0.03] px-5 text-sm text-white transition-all duration-300 focus:ring-0 focus:ring-offset-0"
                    >

                      <SelectValue placeholder="Seleccioná un servicio (Opcional)" />

                    </SelectTrigger>

                    <SelectContent
                      position="popper"
                      sideOffset={8}
                      className="z-[100000] border border-white/10 bg-[#050505] text-white"
                    >

                      <SelectItem value="lavado-premium">
                        Lavado Premium
                      </SelectItem>

                      <SelectItem value="pulido">
                        Pulido y Encerado
                      </SelectItem>

                      <SelectItem value="ceramico">
                        Protección Cerámica
                      </SelectItem>

                      <SelectItem value="detailing">
                        Detailing Completo
                      </SelectItem>

                    </SelectContent>

                  </Select>

                  {/* Message */}
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Contanos un poco sobre lo que necesitás..."
                    rows={4}
                    className="w-full rounded-none border border-white/10 bg-white/[0.03] p-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-red-500/40"
                  />

                  {/* Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative flex h-14 w-full items-center justify-center overflow-hidden bg-white px-6 text-sm font-semibold uppercase tracking-[0.25em] text-black transition-all duration-500 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                  >

                    <div className="absolute inset-0 bg-red-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">

                      {loading
                        ? "Enviando..."
                        : "Enviar Solicitud"}

                    </span>

                  </button>

                </form>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>,
    document.body

  );

}