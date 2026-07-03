import type { Metadata } from "next";
import { resume } from "@/data/resume";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Resume — ${profile.name}`,
  description: resume.summary,
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="font-display text-4xl">{profile.name}</h1>
          <p className="mt-2 text-muted">
            {profile.title} · {profile.location}
          </p>
        </div>
        <a
          href={resume.pdfUrl}
          download
          className="no-print shrink-0 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
        >
          Download PDF
        </a>
      </div>

      <p className="mb-14 max-w-2xl text-lg text-muted">{resume.summary}</p>

      <section className="mb-14">
        <h2 className="mb-6 text-sm tracking-[0.14em] uppercase text-accent font-medium">
          Experience
        </h2>
        <ol className="space-y-10">
          {resume.experience.map((entry) => (
            <li
              key={`${entry.company}-${entry.start}`}
              className="grid gap-1 sm:grid-cols-[140px_1fr]"
            >
              <p className="text-sm text-muted">
                {entry.start} — {entry.end}
              </p>
              <div>
                <h3 className="font-display text-xl">
                  {entry.role}, {entry.company}
                </h3>
                <ul className="mt-3 space-y-2 text-muted">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="pl-4 relative before:absolute before:left-0 before:content-['—']">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-muted">
                  {entry.stack.join(" · ")}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-14">
        <h2 className="mb-6 text-sm tracking-[0.14em] uppercase text-accent font-medium">
          Education
        </h2>
        <ul className="space-y-4">
          {resume.education.map((entry) => (
            <li
              key={entry.institution}
              className="grid gap-1 sm:grid-cols-[140px_1fr]"
            >
              <p className="text-sm text-muted">
                {entry.start ? `${entry.start} — ${entry.end}` : entry.end}
              </p>
              <div>
                <h3 className="font-display text-xl">{entry.institution}</h3>
                <p className="text-muted">{entry.degree}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-14">
        <h2 className="mb-6 text-sm tracking-[0.14em] uppercase text-accent font-medium">
          Skills
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {resume.skills.map((group) => (
            <div key={group.category}>
              <p className="mb-2 text-sm font-medium">{group.category}</p>
              <p className="text-muted">{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-sm tracking-[0.14em] uppercase text-accent font-medium">
          Leadership
        </h2>
        <ul className="space-y-2 text-muted">
          {resume.leadership.map((item) => (
            <li key={item} className="pl-4 relative before:absolute before:left-0 before:content-['—']">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
