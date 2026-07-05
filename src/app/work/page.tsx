import { PageHeading } from "@/components/page-heading";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <div className="px-6 sm:px-10 py-10 sm:py-16">
      <PageHeading label="Work" title="Selected projects." />
      <div className="border-t border-[var(--ink-faint)]">
        {projects.map((project, i) => (
          <div
            key={project.slug}
            className="group border-b border-[var(--ink-faint)] py-6 sm:py-8"
          >
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span className="label shrink-0">
                {String(i + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}
              </span>
              <h2
                className="hero-name flex-1 transition-colors group-hover:text-[var(--accent)]"
                style={{ fontSize: "clamp(1.5rem, 4vw, 2.75rem)" }}
              >
                {project.title}
              </h2>
              <span className="label shrink-0">{project.year}</span>
            </div>
            <p className="mt-3 max-w-[60ch] text-[1rem] leading-relaxed text-[var(--ink-muted)]">
              {project.summary}
            </p>
            <p className="label mt-4">
              {project.role} — {project.tags.join(" / ")}
            </p>
            {project.links.length > 0 && (
              <div className="mt-3 flex gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="label underline decoration-1 underline-offset-4"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
