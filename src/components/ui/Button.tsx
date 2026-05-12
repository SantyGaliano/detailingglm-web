import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {

  const baseStyles =
    "relative overflow-hidden px-8 py-4 text-sm font-bold uppercase tracking-[0.25em] transition-all duration-300";

  const variants = {
    primary:
      "bg-red-500 text-white hover:scale-[1.03] hover:bg-red-600",

    secondary:
      "border border-white/15 bg-black/40 text-white hover:border-white hover:bg-white hover:text-black",
  };

  return (

    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >

      {children}

    </button>

  );

}