
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  FolderCode,
  GitBranch,
  Layers3,
  Monitor,
  Server,
} from "lucide-react";

import {
  projects,
  projectCategories,
  type Project,
  type ProjectFilter,
} from "@/data/projects";

import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";

type ProjectsSectionProps = {
  showAll?: boolean;
};

function ProjectIcon({
  category,
  title,
}: {
  category: Project["category"];
  title: string;
}) {
  if (title.includes("Student")) {
    return <Monitor size={21} />;
  }

  if (category === "Backend") {
    return <Server size={21} />;
  }

  if (category === "UI") {
    return <Layers3 size={21} />;
  }

  return <Code2 size={21} />;
}

function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const hasImage =
    typeof project.image === "string" &&
    project.image.trim().length > 0;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_12px_45px_-22px_var(--glow)] lg:flex-row">
      {/* LEFT: PROJECT COVER */}
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[var(--background)] lg:aspect-auto lg:w-[48%]">
        {hasImage ? (
          <Image
            src={project.image}
            alt={`Conceptual cover artwork for ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full min-h-48 w-full items-center justify-center bg-[var(--surface)]">
            <FolderCode
              size={42}
              className="text-[var(--accent)]"
            />
          </div>
        )}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
        />
      </div>

      {/* RIGHT: PROJECT INFORMATION */}
      <div className="relative flex min-w-0 flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--accent)] transition-colors duration-300 group-hover:border-[var(--accent)]">
            <ProjectIcon
              category={project.category}
              title={project.title}
            />
          </div>

          <span className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
            {project.category}
          </span>
        </div>

        <h3 className="mb-3 text-lg font-bold leading-snug tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)] sm:text-xl">
          {project.title}
        </h3>

        <p className="mb-5 text-sm leading-6 text-[var(--muted)]">
          {project.description}
        </p>

        {/* TECHNOLOGIES */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 font-mono text-[10px] text-[var(--muted)]"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="mt-auto border-t border-[var(--border)] pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-md py-2 text-sm font-semibold text-[var(--accent)] transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            <ArrowUpRight size={16} />
            View Project Details
          </Link>

          {(project.githubUrl || project.liveUrl) && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-3 py-2 text-xs font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <GitBranch size={14} />
                  Source Code
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-3 py-2 text-xs font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection({
  showAll = false,
}: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter>("All");

  const availableProjects = showAll
    ? projects
    : projects.filter((project) => project.featured);

  const filteredProjects =
    activeFilter === "All"
      ? availableProjects
      : availableProjects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <SectionContainer id="projects">
      <SectionHeading
        eyebrow="Selected Work"
        title={showAll ? "Explore My" : "Featured"}
        highlight="Projects"
        description={
          showAll
            ? "A collection of software engineering projects, applications, and technical experiments."
            : "Explore software engineering work across backend development, cloud technologies, and interactive applications."
        }
      />

      {/* CATEGORY FILTERS */}
      <div className="mb-8 flex flex-wrap gap-3">
        {projectCategories.map((category) => {
          const isActive = activeFilter === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              aria-pressed={isActive}
              className={`rounded-lg border px-5 py-2.5 font-mono text-xs font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
                isActive
                  ? "border-[var(--accent)] bg-[var(--accent)] text-[#04100a]"
                  : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* TWO-BY-TWO PROJECT GRID */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      ) : (
        <div className="flex min-h-56 flex-col items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
          <FolderCode
            size={36}
            className="mb-4 text-[var(--accent)]"
          />

          <h3 className="mb-2 text-lg font-semibold">
            No projects in this category yet
          </h3>

          <p className="text-sm text-[var(--muted)]">
            Try selecting another project category.
          </p>
        </div>
      )}

      {/* VIEW ALL PROJECTS */}
      {!showAll && (
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 rounded-xl border border-[var(--accent)] px-7 py-3.5 font-semibold text-[var(--accent)] transition-all duration-300 hover:bg-[var(--accent)] hover:text-[#04100a] hover:shadow-[0_0_25px_var(--glow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            View All Projects

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
