import type { Attribute } from "@/data/types";

export function HobbyistPanel({ attributes }: { attributes: Attribute[] }) {
  return (
    <div className="hobbyist-zone h-full w-full">
      <div className="hobbyist-tiles">
        {attributes.map((attribute) => (
          <div
            key={attribute.label}
            className="hobbyist-tile"
            style={{ ["--tile-color" as string]: `var(${attribute.colorVar})` }}
          >
            {attribute.label}
          </div>
        ))}
      </div>
    </div>
  );
}
