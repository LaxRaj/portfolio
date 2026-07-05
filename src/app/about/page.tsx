import { PageHeading } from "@/components/page-heading";
import { profile } from "@/data/profile";

export default function AboutPage() {
  return (
    <div className="px-6 sm:px-10 py-10 sm:py-16">
      <PageHeading label="About" title="Not just one thing." />
      <div className="max-w-[62ch] space-y-6">
        {profile.bio.map((paragraph, i) => (
          <p key={i} className="text-[1.05rem] leading-relaxed text-[var(--ink)]">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
