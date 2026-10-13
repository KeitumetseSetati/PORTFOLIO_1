
import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl
        border border-[var(--border)]
        bg-[var(--surface)]/80
        p-6 backdrop-blur-xl
        transition-all duration-300
        ${
          hover
            ? "hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_0_30px_var(--glow)]"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}
