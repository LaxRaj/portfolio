import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <Reveal>
        <SectionHeading eyebrow="About" title="A little more context" />
      </Reveal>

      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_260px]">
        <Reveal delay={0.05}>
          <div className="space-y-5 text-lg text-muted max-w-2xl">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <a
              href="/resume"
              className="inline-block text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              Read my full resume →
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <div
              aria-hidden
              className="mb-6 aspect-square w-full rounded-2xl border border-border"
              style={{
                background:
                  "repeating-linear-gradient(135deg, var(--surface) 0 12px, transparent 12px 24px)",
              }}
            />
            <p className="mb-3 text-xs tracking-[0.14em] uppercase text-muted">
              Currently using
            </p>
            <ul className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-foreground/80">
              {profile.skills.map((skill) => (
                <li key={skill} className="after:content-['·'] last:after:content-none after:ml-3 after:text-border">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
