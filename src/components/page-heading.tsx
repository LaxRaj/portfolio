export function PageHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="mb-10 sm:mb-16">
      <p className="label mb-3">{label}</p>
      <h1 className="hero-name" style={{ fontSize: "clamp(2.25rem, 6vw, 5rem)" }}>
        {title}
      </h1>
    </div>
  );
}
