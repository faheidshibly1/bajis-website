type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-navy)]/70">
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-3">
        <h2 className="font-serif text-3xl tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
