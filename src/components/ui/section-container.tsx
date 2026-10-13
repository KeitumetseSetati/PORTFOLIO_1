
import type { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export function SectionContainer({
  children,
  id,
  className = "",
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-7xl scroll-mt-24 px-6 py-16 md:px-10 md:py-24 ${className}`}
    >
      {children}
    </section>
  );
}
