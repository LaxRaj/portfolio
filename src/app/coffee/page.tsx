import { PageHeading } from "@/components/page-heading";
import { profile } from "@/data/profile";

export default function CoffeePage() {
  return (
    <div className="px-6 sm:px-10 py-10 sm:py-16">
      <PageHeading label="Coffee?" title="Let’s get one." />
      <p className="max-w-[52ch] text-[1.05rem] leading-relaxed text-[var(--ink)]">
        {profile.availability}. Real coffee in {profile.location}, or a call if
        you’re elsewhere.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="hero-name accent mt-8 block w-fit"
        style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
      >
        {profile.email}
      </a>
      <div className="mt-10 flex gap-6">
        {profile.socials
          .filter((s) => s.label !== "Email")
          .map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="label underline decoration-1 underline-offset-4"
            >
              {social.label}
            </a>
          ))}
      </div>
    </div>
  );
}
