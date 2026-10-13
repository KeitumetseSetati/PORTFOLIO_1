
import {
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  MapPin,
} from "lucide-react";

const responsibilities = [
  {
    title: "API Development",
    description:
      "Developed and maintained RESTful API endpoints using C# and ASP.NET Core, including GET, POST, and PUT operations.",
    icon: Code2,
  },
  {
    title: "Database Integration",
    description:
      "Worked with SQL Server, stored procedures, database queries, and application data access to support backend functionality.",
    icon: Database,
  },
  {
    title: "Testing and Troubleshooting",
    description:
      "Tested API functionality, implemented request validations, investigated defects, and verified expected system behaviour.",
    icon: CheckCircle2,
  },
  {
    title: "Team Collaboration and DevOps",
    description:
      "Participated in code reviews and gained practical exposure to Azure Portal, Azure DevOps, and development pipelines.",
    icon: GitBranch,
  },
];

const technologies = [
  "C#",
  "ASP.NET Core",
  "REST APIs",
  "SQL Server",
  "Stored Procedures",
  "Microsoft Azure",
  "Azure DevOps",
  "Git",
  "API Testing",
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 px-6 py-24 md:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
            Professional Journey
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[var(--foreground)] md:text-6xl">
            My <span className="text-[var(--accent)]">Experience</span>
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            Practical industry experience developing backend systems,
            collaborating with development teams, and working with Microsoft
            technologies in a professional software environment.
          </p>
        </div>

        <div className="relative pl-6 md:pl-10">
          <div className="absolute bottom-0 left-[7px] top-3 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent md:left-[15px]" />

          <div className="absolute left-0 top-3 h-4 w-4 rounded-full border-4 border-[var(--background)] bg-[var(--accent)] shadow-[0_0_18px_var(--accent)] md:left-2" />

          <article className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-[var(--accent)]/50 md:p-10">
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />

            <div className="relative">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background)] text-[var(--accent)]">
                    <BriefcaseBusiness size={27} />
                  </div>

                  <h3 className="text-2xl font-bold text-[var(--foreground)] md:text-3xl">
                    Junior Software Developer
                  </h3>

                  <p className="mt-2 text-xl font-semibold text-[var(--accent)]">
                    Direct Transact
                  </p>
                </div>

                <div className="flex flex-col gap-3 font-mono text-sm text-[var(--muted)]">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} className="text-[var(--accent)]" />
                    <span>February 2026 – October 2026</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[var(--accent)]" />
                    <span>South Africa</span>
                  </div>

                  <span className="w-fit rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-xs uppercase tracking-wider text-[var(--accent)]">
                    Professional Experience
                  </span>
                </div>
              </div>

              <div className="my-8 h-px bg-[var(--border)]" />

              <p className="max-w-4xl text-base leading-8 text-[var(--muted)]">
                Contributed to the development and maintenance of backend
                applications in a professional software development
                environment. Worked with API endpoints, database operations,
                application validations, and software troubleshooting while
                collaborating with other developers and gaining exposure to
                cloud and DevOps workflows.
              </p>

              <h4 className="mb-6 mt-10 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
                Key Responsibilities and Contributions
              </h4>

              <div className="grid gap-4 md:grid-cols-2">
                {responsibilities.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50"
                    >
                      <Icon
                        size={24}
                        className="mb-5 text-[var(--accent)]"
                        strokeWidth={1.8}
                      />

                      <h5 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
                        {item.title}
                      </h5>

                      <p className="text-sm leading-7 text-[var(--muted)]">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <h4 className="mb-5 mt-10 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
                Technologies and Tools
              </h4>

              <div className="flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 font-mono text-xs text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
