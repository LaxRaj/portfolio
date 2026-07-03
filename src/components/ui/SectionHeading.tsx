export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="mb-3 text-sm tracking-[0.14em] uppercase text-accent font-medium">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
    </div>
  );
}
