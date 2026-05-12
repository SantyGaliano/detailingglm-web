interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {

  return (

    <div
      className={`${
        centered ? "text-center" : "text-left"
      }`}
    >

      <span className="text-xs uppercase tracking-[0.4em] text-red-500">

        {label}

      </span>

      <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-5xl uppercase leading-none text-white md:text-7xl">

        {title}

      </h2>

      {subtitle && (

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-[1.9] text-gray-400 md:text-base">

          {subtitle}

        </p>

      )}

      <div
        className={`mt-5 h-[2px] w-20 bg-red-500 ${
          centered ? "mx-auto" : ""
        }`}
      />

    </div>

  );

}