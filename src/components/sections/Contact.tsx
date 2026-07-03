import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-6 py-24 md:py-32 border-t border-border"
    >
      <Reveal>
        <p className="mb-3 text-sm tracking-[0.14em] uppercase text-accent font-medium">
          Contact
        </p>
        <p className="mb-8 max-w-xl text-muted">{profile.availability}</p>
        <a
          href={`mailto:${profile.email}`}
          className="font-display text-[clamp(2rem,6vw,4rem)] leading-tight break-all hover:text-accent transition-colors"
        >
          {profile.email}
        </a>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
          {profile.socials
            .filter((s) => s.label !== "Email")
            .map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  className="transition-colors hover:text-foreground"
                >
                  {social.label}
                </a>
              </li>
            ))}
        </ul>
      </Reveal>
    </section>
  );
}
