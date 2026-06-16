"use client";

import FadeIn from "./FadeIn";

interface StackCardProps {
  label: string;
  title: string;
  description: string;
  value: string;
  bonus?: boolean;
  delay?: number;
}

export default function StackCard({
  label,
  title,
  description,
  value,
  bonus = false,
  delay = 0,
}: StackCardProps) {
  return (
    <FadeIn delay={delay}>
      <div
        className={`bg-card rounded-2xl p-8 sm:p-10 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 sm:gap-8 items-start transition-colors duration-300 ${
          bonus
            ? "border border-dashed border-green hover:bg-green-glow/30"
            : "border border-border hover:border-accent hover:bg-card-hover"
        }`}
      >
        <div>
          <div
            className={`text-xs font-bold uppercase tracking-widest mb-2 ${
              bonus ? "text-green" : "text-accent"
            }`}
          >
            {label}
          </div>
          <h3 className="text-xl font-bold tracking-tight mb-3">{title}</h3>
          <p className="text-secondary text-[15px] leading-relaxed">
            {description}
          </p>
        </div>
        <div className="sm:text-right">
          <div className="text-xs text-muted uppercase tracking-wide">
            {bonus ? "Bonus Value" : "Value"}
          </div>
          <div
            className={`text-[28px] font-extrabold tracking-tight ${
              bonus ? "text-green" : "text-white"
            }`}
          >
            {value}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
