
import Link from "next/link";
import type { ReactNode } from "react";

type GlowButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "outline";
  className?: string;
  download?: boolean;
};

export function GlowButton({
  children,
  href,
  variant = "primary",
  className = "",
  download = false,
}: GlowButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

  const variants = {
    primary:
      "bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)] hover:shadow-[0_0_25px_var(--glow)]",

    outline:
      "border border-[var(--accent)] bg-transparent text-[var(--accent)] hover:bg-[var(--surface-secondary)] hover:shadow-[0_0_20px_var(--glow)]",
  };

  return (
    <Link
      href={href}
      download={download || undefined}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
