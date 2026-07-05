import type { CSSProperties } from "react";
import type { Attribute } from "@/data/types";

const TILE_FLAVOR = [
  { rotate: -2.2, radius: "42% 58% 61% 39% / 46% 42% 58% 54%", flex: 1.15, shift: 0 },
  { rotate: 1.6, radius: "58% 42% 38% 62% / 55% 60% 40% 45%", flex: 0.82, shift: 28 },
  { rotate: -1.1, radius: "46% 54% 58% 42% / 60% 38% 62% 40%", flex: 1.08, shift: -14 },
  { rotate: 2.4, radius: "54% 46% 42% 58% / 44% 56% 44% 56%", flex: 0.88, shift: 18 },
  { rotate: -1.6, radius: "40% 60% 54% 46% / 52% 44% 58% 48%", flex: 1.22, shift: -6 },
];

export function HobbyistPanel({ attributes }: { attributes: Attribute[] }) {
  return (
    <div className="hobbyist-zone h-full w-full">
      <div className="hobbyist-tiles">
        {attributes.map((attribute, i) => {
          const flavor = TILE_FLAVOR[i % TILE_FLAVOR.length];
          return (
            <div
              key={attribute.label}
              className="hobbyist-tile"
              style={
                {
                  "--tile-flex": flavor.flex,
                  "--tile-shift": `${flavor.shift}px`,
                } as CSSProperties
              }
            >
              <div
                className="hobbyist-tile-inner"
                style={
                  {
                    "--tile-color": `var(${attribute.colorVar})`,
                    "--tile-rotate": `${flavor.rotate}deg`,
                    "--tile-radius": flavor.radius,
                  } as CSSProperties
                }
              >
                <span>{attribute.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
