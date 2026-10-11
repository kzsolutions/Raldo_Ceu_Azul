import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <span className={tone === "light" ? "eyebrow !text-brand-blue-soft" : "eyebrow"}>
          <span className="h-px w-6 bg-current opacity-60" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${
          tone === "light" ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed sm:text-lg ${tone === "light" ? "text-brand-blue-soft/90" : "text-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
