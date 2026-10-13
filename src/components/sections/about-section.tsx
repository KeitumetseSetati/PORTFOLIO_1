
import { ArrowUpRight, Braces, Cloud, Database, GitBranch } from "lucide-react";

const highlights = [
  {
    title: "Software Engineering",
    description: "Building maintainable, reliable software solutions.",
    icon: Braces,
    color: "var(--accent)",
  },
  {
    title: "Backend Development",
    description: "Professional experience with C#, ASP.NET Core, and REST APIs.",
    icon: Database,
    color: "#00e5ff",
  },
  {
    title: "Cloud Technologies",
    description: "Microsoft Azure and Azure DevOps experience.",
    icon: Cloud,
    color: "#9b5cff",
  },
  {
    title: "Development Practices",
    description: "API testing, debugging, version control, and code reviews.",
    icon: GitBranch,
    color: "var(--accent)",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden px-6 py-24 md:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
            About Me
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[var(--foreground)] md:text-6xl">
            More Than <span className="text-[var(--accent)]">Code</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg text-[var(--muted)]">
            A software engineer driven by problem-solving, continuous
            learning, and building meaningful digital solutions.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:border-[var(--accent)]/50 md:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="relative">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_16px_var(--accent)]" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                  Who I Am
                </span>
              </div>

              <h3 className="mb-6 text-2xl font-semibold leading-snug text-[var(--foreground)] md:text-3xl">
                Engineering software with purpose and precision.
              </h3>

              <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
                <p>
                  I&apos;m{" "}
                  <strong className="font-semibold text-[var(--foreground)]">
                    Keitumetse Setati
                  </strong>
                  , a software engineer with real-world experience working as
                  a Junior Software Developer at Direct Transact.
                </p>

                <p>
                  My professional experience includes developing and
                  maintaining RESTful APIs using C# and ASP.NET Core, working
                  with SQL Server databases and stored procedures, and
                  implementing application logic, validations, and error
                  handling.
                </p>

                <p>
                  I&apos;ve also gained practical exposure to Microsoft Azure
                  and Azure DevOps, alongside experience in API testing,
                  investigating software defects, and participating in code
                  reviews.
                </p>

                <p>
                  I approach software engineering with a commitment to
                  continuous improvement, thoughtful problem-solving, and
                  delivering solutions that are reliable, maintainable, and
                  valuable to their users.
                </p>
              </div>

              <a
                href="#experience"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-[var(--accent)] transition-all hover:gap-3"
              >
                Explore my experience
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:shadow-[0_12px_35px_rgba(0,255,133,0.06)]"
                >
                  <div
                    className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      color: item.color,
                      backgroundColor: "var(--background)",
                    }}
                  >
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <h4 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h4>

                  <p className="text-sm leading-7 text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
