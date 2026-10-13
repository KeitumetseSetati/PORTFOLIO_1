
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Code2,
  Download,
  ExternalLink,
  BriefcaseBusiness,
  Mail,
} from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GlowButton } from "@/components/ui/glow-button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BackgroundEffects } from "@/components/ui/background-effects";
import LaptopPreview from "@/components/three/laptop-preview";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";

const technologies = [
  "C#",
  "ASP.NET Core",
  "SQL Server",
  "Microsoft Azure",
  "Azure DevOps",
  "REST APIs",
];

const socialLinks = {
  github: "https://github.com/KeitumetseSetati",
  linkedin:
    "https://www.linkedin.com/in/keitumetse-setati-116252214/",
  email: "mailto:keitumetsecezil16@gmail.com",
};

const cvPath = "/documents/KEITUMETSE_SETATI_CV.pdf";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <BackgroundEffects />

      <div className="relative z-10">
        <Navbar />

        {/* HERO SECTION */}
        <SectionContainer
          id="home"
          className="flex min-h-[calc(100svh-80px)] flex-col justify-center py-12 lg:py-16"
        >
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-6">
            {/* LEFT: INTRODUCTION */}
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--glow)]" />

                <span className="font-mono text-xs tracking-wider text-[var(--accent)]">
                  SOFTWARE DEVELOPER
                </span>
              </div>

              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                C# · .NET · Azure
              </p>

              <h1 className="mb-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl">
                BUILDING{" "}
                <span className="neon-text">
                  RELIABLE
                </span>
                <br />
                SOFTWARE
                <span className="text-[var(--accent)]">
                  .
                </span>
              </h1>

              <p className="mb-8 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                I&apos;m Keitumetse Setati, a software engineer with
                real-world experience developing RESTful APIs,
                database-driven applications, and reliable software
                solutions using C#, ASP.NET Core, SQL Server, and
                Microsoft Azure technologies.
              </p>

              {/* MAIN ACTION BUTTONS */}
              <div className="mb-5 flex flex-wrap gap-4">
                <GlowButton href="#projects">
                  View Projects
                  <ArrowUpRight size={18} />
                </GlowButton>

                <GlowButton
                  href="#contact"
                  variant="outline"
                >
                  Contact Me
                  <ArrowRight size={18} />
                </GlowButton>
              </div>

              {/* DOWNLOAD CV */}
              <div className="mb-8">
                <GlowButton
                  href={cvPath}
                  variant="outline"
                  download
                >
                  <Download size={18} />
                  Download CV
                </GlowButton>
              </div>

              {/* SOCIAL LINKS */}
              <div className="flex items-center gap-5">
                <span className="font-mono text-xs text-[var(--muted)]">
                  CONNECT
                </span>

                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                  title="GitHub"
                  className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  <ExternalLink size={21} />
                </a>

                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my LinkedIn profile"
                  title="LinkedIn"
                  className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  <BriefcaseBusiness size={21} />
                </a>

                <a
                  href={socialLinks.email}
                  aria-label="Send me an email"
                  title="Email"
                  className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  <Mail size={21} />
                </a>
              </div>
            </div>

            {/* RIGHT: INTERACTIVE 3D LAPTOP */}
            <div className="relative min-w-0">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-8 rounded-full bg-[var(--accent)] opacity-[0.06] blur-[100px]"
              />

              <LaptopPreview />

              <p className="-mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] md:text-xs">
                Interactive 3D · Move your cursor
              </p>
            </div>
          </div>

          {/* TECHNOLOGY BADGES */}
          <div className="mt-10 flex flex-wrap gap-3 lg:mt-14">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)]/70 px-4 py-2 font-mono text-xs text-[var(--muted)] backdrop-blur-md"
              >
                {technology}
              </span>
            ))}
          </div>
        </SectionContainer>

        {/* SKILLS */}
        <SectionContainer id="skills">
          <SectionHeading
            eyebrow="Technical Expertise"
            title="My Core"
            highlight="Skills"
            description="Technologies and tools I use to build reliable software solutions."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <GlassCard>
              <Code2
                size={34}
                className="mb-5 text-[var(--accent)]"
              />

              <h3 className="mb-3 text-xl font-semibold">
                Backend Development
              </h3>

              <p className="text-[var(--muted)]">
                C#, ASP.NET Core, RESTful APIs, SQL Server,
                stored procedures, and database integration.
              </p>
            </GlassCard>

            <GlassCard>
              <Cloud
                size={34}
                className="mb-5 text-[var(--cyan)]"
              />

              <h3 className="mb-3 text-xl font-semibold">
                Cloud Technologies
              </h3>

              <p className="text-[var(--muted)]">
                Microsoft Azure, Azure DevOps,
                deployment pipelines, and cloud services.
              </p>
            </GlassCard>
          </div>
        </SectionContainer>

        {/* ABOUT */}
        <AboutSection />

        {/* EXPERIENCE */}
        <ExperienceSection />

        {/* PROJECTS */}
        <ProjectsSection />

        {/* CERTIFICATIONS */}
        <CertificationsSection />

        {/* CONTACT */}
        <ContactSection />

        {/* FOOTER */}
        <Footer />
      </div>
    </main>
  );
}
