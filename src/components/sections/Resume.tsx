import { resume } from "@/data/resume";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ResumeTeaser() {
  const latest = resume.experience[0];

  return (
    <section
      id="resume"
      className="mx-auto max-w-5xl px-6 py-24 md:py-32 border-t border-border"
    >
      <Reveal>
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between rounded-2xl border border-border bg-surface p-8">
          <div>
            <p className="text-sm text-muted">
              {latest.start} — {latest.end}
            </p>
            <h3 className="mt-2 font-display text-2xl">
              {latest.role}, {latest.company}
            </h3>
            <p className="mt-3 max-w-xl text-muted">{resume.summary}</p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href="/resume"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              Full resume
            </a>
            <a
              href={resume.pdfUrl}
              download
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
            >
              Download PDF
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
