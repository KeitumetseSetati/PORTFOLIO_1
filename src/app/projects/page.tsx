import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { BackgroundEffects } from "@/components/ui/background-effects";
import { ProjectsSection } from "@/components/sections/projects-section";

export const metadata: Metadata = {
  title: "Projects | Keitumetse Setati",
  description:
    "Explore software engineering projects, backend applications, and development work by Keitumetse Setati.",
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <BackgroundEffects />

      <div className="relative z-10">
        <Navbar />

        <div className="mx-auto max-w-7xl px-6 pt-10 sm:px-8 lg:px-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>

        <ProjectsSection showAll />
      </div>
    </main>
  );
}