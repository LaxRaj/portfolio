import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Life() {
  return (
    <section id="life" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <Reveal>
        <SectionHeading eyebrow="Life" title="Off the clock" />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="space-y-5 text-lg text-muted max-w-2xl">
          {profile.life.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
