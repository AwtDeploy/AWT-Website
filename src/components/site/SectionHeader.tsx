import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-bold text-ink md:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-base text-ink-soft">{description}</p>}
    </div>
  );
}
