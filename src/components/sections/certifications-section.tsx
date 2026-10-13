
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Cloud,
  Code2,
  Download,
  ExternalLink,
} from "lucide-react";

import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";

const certifications = [
  {
    id: "az-204",
    code: "AZ-204",
    name: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    description:
      "Demonstrates knowledge of developing, deploying, securing, monitoring, and maintaining applications and services on Microsoft Azure.",
    file: "/certificates/AZ204%20Certification.pdf",
    Icon: Code2,
    topics: [
      "Azure App Service",
      "Azure Storage",
      "Azure Security",
      "Monitoring",
    ],
  },
  {
    id: "az-900",
    code: "AZ-900",
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    description:
      "Demonstrates foundational understanding of cloud concepts, Azure services, security, governance, and cloud management.",
    file: "/certificates/AZ900%20Certificate.pdf",
    Icon: Cloud,
    topics: [
      "Cloud Concepts",
      "Azure Services",
      "Security",
      "Governance",
    ],
  },
];

type CertificationsSectionProps = {
  showAll?: boolean;
};

export function CertificationsSection({
  showAll = false,
}: CertificationsSectionProps) {
  return (
    <SectionContainer id="certifications">
      <SectionHeading
        eyebrow="Professional Development"
        title="My"
        highlight="Certifications"
        description="Microsoft Azure certifications demonstrating my commitment to continuous learning and cloud development."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((certification) => {
          const Icon = certification.Icon;

          return (
            <article
              key={certification.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_12px_45px_-22px_var(--glow)] sm:p-8"
            >
              {/* CERTIFICATION HEADER */}
              <div className="mb-7 flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--accent)] transition-colors group-hover:border-[var(--accent)]">
                  <Icon size={28} />
                </div>

                <span className="rounded-full border border-[var(--border)] px-3 py-1.5 font-mono text-xs tracking-wider text-[var(--accent)]">
                  {certification.code}
                </span>
              </div>

              {/* ISSUER */}
              <div className="mb-3 flex items-center gap-2 text-sm text-[var(--muted)]">
                <Award size={16} className="text-[var(--accent)]" />
                <span>{certification.issuer}</span>
              </div>

              {/* CERTIFICATION NAME */}
              <h3 className="mb-4 text-xl font-bold leading-snug tracking-tight transition-colors group-hover:text-[var(--accent)] sm:text-2xl">
                {certification.name}
              </h3>

              <p className="mb-6 text-sm leading-7 text-[var(--muted)]">
                {certification.description}
              </p>

              {/* TOPICS */}
              <div className="mb-8 flex flex-wrap gap-2">
                {certification.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 font-mono text-[11px] text-[var(--muted)]"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* CERTIFICATE ACTIONS */}
              <div className="mt-auto border-t border-[var(--border)] pt-6">
                <div className="flex flex-wrap gap-3">
                  <a
                    href={certification.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-[var(--accent)] bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-[#04100a] transition-all hover:shadow-[0_0_25px_var(--glow)]"
                  >
                    <ExternalLink size={16} />
                    View Certificate
                    <ArrowUpRight size={15} />
                  </a>

                  <a
                    href={certification.file}
                    download
                    className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm font-semibold transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    <Download size={16} />
                    Download
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* VIEW ALL CERTIFICATIONS */}
      {!showAll && (
        <div className="mt-10 flex justify-center">
          <Link
            href="/certifications"
            className="group inline-flex items-center gap-3 rounded-xl border border-[var(--accent)] px-7 py-3.5 font-semibold text-[var(--accent)] transition-all duration-300 hover:bg-[var(--accent)] hover:text-[#04100a] hover:shadow-[0_0_25px_var(--glow)]"
          >
            View All Certifications
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      )}
    </SectionContainer>
  );
}
