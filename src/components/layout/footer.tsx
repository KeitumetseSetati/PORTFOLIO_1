
import Link from "next/link";
import {
  ArrowUp,
  ExternalLink,
  Mail,
} from "lucide-react";

const links = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          {/* BRAND */}
          <div className="max-w-sm">
            <Link
              href="/#home"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)] font-bold text-[#04100a]">
                KS
              </span>
              <span className="font-bold tracking-tight">
                Keitumetse.dev
              </span>
            </Link>

            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              Software engineering, thoughtful problem-solving,
              and reliable digital solutions.
            </p>
          </div>

          {/* NAVIGATION */}
          <nav
            aria-label="Footer navigation"
            className="flex max-w-md flex-wrap gap-x-5 gap-y-3"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* BACK TO TOP */}
          <Link
            href="/#home"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-[var(--border)] px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Back to Top
            <ArrowUp size={17} />
          </Link>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} Keitumetse Setati.
            All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/KeitumetseSetati"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              <ExternalLink size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/keitumetse-setati-116252214/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              <ExternalLink size={18} />
            </a>

            <a
              href="mailto:keitumetsecezil16@gmail.com"
              aria-label="Email"
              className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
