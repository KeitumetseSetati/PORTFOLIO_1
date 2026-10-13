
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquare,
} from "lucide-react";

import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";

const contact = {
  email: "keitumetsecezil16@gmail.com",
  github: "https://github.com/KeitumetseSetati",
  linkedin:
    "https://www.linkedin.com/in/keitumetse-setati-116252214/",
  cv: "/documents/KEITUMETSE_SETATI_CV.pdf",
};

export function ContactSection() {
  return (
    <SectionContainer id="contact">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Let's"
        highlight="Connect"
        description="Interested in collaborating, discussing a software development opportunity, or learning more about my work? I'd be glad to hear from you."
      />

      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        {/* PRIMARY CONTACT CARD */}
        <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 p-7 sm:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--accent)] opacity-[0.06] blur-3xl"
          />

          <div className="relative z-10">
            <div className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--accent)]">
              <MessageSquare size={27} />
            </div>

            <h3 className="mb-4 max-w-lg text-2xl font-bold tracking-tight sm:text-3xl">
              Have a project or opportunity in mind?
            </h3>

            <p className="mb-8 max-w-lg leading-7 text-[var(--muted)]">
              I&apos;m interested in opportunities where I can
              contribute to meaningful software solutions,
              collaborate with development teams, and continue
              growing as a software engineer.
            </p>

            <a
              href={`mailto:${contact.email}?subject=Software%20Development%20Opportunity`}
              className="inline-flex items-center gap-3 rounded-xl border border-[var(--accent)] bg-[var(--accent)] px-6 py-3.5 font-semibold text-[#04100a] transition-all duration-300 hover:shadow-[0_0_25px_var(--glow)]"
            >
              <Mail size={19} />
              Send Me an Email
              <ArrowUpRight size={18} />
            </a>

            <p className="mt-5 break-all font-mono text-sm text-[var(--muted)]">
              {contact.email}
            </p>
          </div>
        </div>

        {/* CONTACT OPTIONS */}
        <div className="flex flex-col gap-4">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-1 items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]"
          >
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
                Professional Network
              </p>
              <h3 className="text-xl font-bold">LinkedIn</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Connect with me professionally.
              </p>
            </div>
            <ExternalLink
              size={20}
              className="shrink-0 text-[var(--accent)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-1 items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]"
          >
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
                Source Code
              </p>
              <h3 className="text-xl font-bold">GitHub</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Explore my repositories and projects.
              </p>
            </div>
            <ExternalLink
              size={20}
              className="shrink-0 text-[var(--accent)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          <a
            href={contact.cv}
            download
            className="group flex flex-1 items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]"
          >
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
                Professional Profile
              </p>
              <h3 className="text-xl font-bold">Download CV</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                View my experience and qualifications.
              </p>
            </div>
            <Download
              size={20}
              className="shrink-0 text-[var(--accent)] transition-transform group-hover:translate-y-1"
            />
          </a>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-2 font-mono text-xs text-[var(--muted)]">
        <MapPin size={15} className="text-[var(--accent)]" />
        Based in South Africa
      </div>
    </SectionContainer>
  );
}
