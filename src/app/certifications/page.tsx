
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { BackgroundEffects } from "@/components/ui/background-effects";
import { CertificationsSection } from "@/components/sections/certifications-section";

export const metadata: Metadata = {
  title: "Certifications | Keitumetse Setati",
  description:
    "Explore Keitumetse Setati's Microsoft Azure certifications, including AZ-900 and AZ-204.",
};

export default function CertificationsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <BackgroundEffects />

      <div className="relative z-10">
        <Navbar />

        <div className="mx-auto max-w-7xl px-6 pt-10 md:px-12">
          <Link
            href="/#certifications"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>

        <CertificationsSection showAll />
      </div>
    </main>
  );
}
