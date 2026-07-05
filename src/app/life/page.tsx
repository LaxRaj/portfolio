import { PageHeading } from "@/components/page-heading";
import { profile } from "@/data/profile";

export default function LifePage() {
  return (
    <div className="px-6 sm:px-10 py-10 sm:py-16">
      <PageHeading label="Life" title="Everything in between." />
      <div className="max-w-[62ch] space-y-6">
        {profile.life.map((paragraph, i) => (
          <p key={i} className="text-[1.05rem] leading-relaxed text-[var(--ink)]">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
