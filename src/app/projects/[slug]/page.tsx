
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  GitBranch,
  Layers3,
} from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { BackgroundEffects } from "@/components/ui/background-effects";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found | Keitumetse Setati",
    };
  }

  return {
    title: `${project.title} | Keitumetse Setati`,
    description: project.description,
  };
}

export default async function ProjectDetailsPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const projectIndex = projects.findIndex(
    (item) => item.slug === slug
  );

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject =
    projects[(projectIndex + 1) % projects.length];

  const hasImage =
    typeof project.image === "string" &&
    project.image.trim().length > 0;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <BackgroundEffects />

      <div className="relative z-10">
        <Navbar />

        <div className="mx-auto max-w-6xl px-6 pb-24 pt-10 sm:px-8 lg:px-12">
          {/* BACK NAVIGATION */}
          <Link
            href="/projects"
            className="mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
          >
            <ArrowLeft size={16} />
            All Projects
          </Link>

          {/* PROJECT HEADER */}
          <header className="mb-10">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[var(--accent)] px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
                {project.category}
              </span>

              <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                {project.status}
              </span>
            </div>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
              <span className="text-[var(--accent)]">.</span>
            </h1>

            <p className="max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              {project.description}
            </p>

            {/* PROJECT LINKS */}
            <div className="mt-8 flex flex-wrap gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 font-semibold text-[#04100a] transition-all hover:shadow-[0_0_25px_var(--glow)]"
                >
                  <GitBranch size={18} />
                  View Source Code
                  <ArrowUpRight size={17} />
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-semibold transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
          </header>

          {/* PROJECT COVER */}
          <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] sm:aspect-[21/10]">
            {hasImage ? (
              <Image
                src={project.image}
                alt={`Conceptual illustration representing ${project.title}`}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1100px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <Code2
                  size={64}
                  className="text-[var(--accent)]"
                />
              </div>
            )}
          </div>

          <p className="-mt-8 mb-12 font-mono text-xs text-[var(--muted)]">
            Conceptual project artwork — not an actual
            application screenshot.
          </p>

          {/* PROJECT CONTENT */}
          <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            {/* OVERVIEW */}
            <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 p-7 sm:p-9">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--accent)]">
                  <Layers3 size={23} />
                </div>

                <h2 className="text-2xl font-bold">
                  Project Overview
                </h2>
              </div>

              <p className="text-base leading-8 text-[var(--muted)]">
                {project.overview}
              </p>
            </section>

            {/* TECHNOLOGY STACK */}
            <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 p-7 sm:p-9">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--accent)]">
                  <Code2 size={23} />
                </div>

                <h2 className="text-2xl font-bold">
                  Technology Stack
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 font-mono text-xs text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* NEXT PROJECT */}
          <div className="mt-12 border-t border-[var(--border)] pt-10">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
              Explore Another Project
            </p>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-[var(--accent)] sm:p-8"
            >
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
                  Next Project
                </p>

                <h2 className="text-xl font-bold sm:text-2xl">
                  {nextProject.title}
                </h2>
              </div>

              <ArrowRight
                size={25}
                className="shrink-0 text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
