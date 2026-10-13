
type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-3xl">
      {eyebrow && (
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
        {title}{" "}
        {highlight && (
          <span className="text-[var(--accent)]">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
