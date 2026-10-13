
export function BackgroundEffects() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      {/* Green glow */}
      <div
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, var(--glow), transparent 70%)",
        }}
      />

      {/* Cyan glow */}
      <div
        className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full opacity-30 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, var(--cyan), transparent 70%)",
        }}
      />
    </div>
  );
}
