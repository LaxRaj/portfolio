"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

const TRAIL_LENGTH = 6;

const ARROW_BITMAP = [
  "X.......",
  "XX......",
  "X.X.....",
  "X..X....",
  "X...X...",
  "X....X..",
  "X.....X.",
  "X....XX.",
  "X..XX...",
  "X.X.....",
  "XX......",
  "X.......",
];

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}

function PixelArrow({ opacity, color }: { opacity: number; color: string }) {
  return (
    <svg
      viewBox="0 0 8 12"
      width="34"
      height="51"
      shapeRendering="crispEdges"
      style={{ opacity }}
    >
      {ARROW_BITMAP.flatMap((row, y) =>
        row
          .split("")
          .map((cell, x) =>
            cell === "X" ? (
              <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={color} />
            ) : null
          )
      )}
    </svg>
  );
}

export function CustomCursor() {
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const target = useRef({ x: -100, y: -100 });
  const points = useRef(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: -100, y: -100 }))
  );
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!canHover) return;

    const applyTransforms = () => {
      nodeRefs.current.forEach((node, i) => {
        const p = points.current[i];
        if (node) node.style.transform = `translate(${p.x}px, ${p.y}px)`;
      });
    };

    const handleMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (reducedMotion) {
        for (const p of points.current) {
          p.x = e.clientX;
          p.y = e.clientY;
        }
        applyTransforms();
      }
    };

    let raf = 0;
    function tick() {
      const pts = points.current;
      pts[0].x += (target.current.x - pts[0].x) * 0.45;
      pts[0].y += (target.current.y - pts[0].y) * 0.45;
      for (let i = 1; i < pts.length; i++) {
        pts[i].x += (pts[i - 1].x - pts[i].x) * 0.4;
        pts[i].y += (pts[i - 1].y - pts[i].y) * 0.4;
      }
      applyTransforms();
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", handleMove);
    if (!reducedMotion) raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, [canHover, reducedMotion]);

  if (!canHover) return null;

  return (
    <div className="cursor-layer" aria-hidden="true">
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(node) => {
            nodeRefs.current[i] = node;
          }}
          className="cursor-dot"
        >
          <PixelArrow
            opacity={i === 0 ? 1 : 0.32 - i * 0.045}
            color={i === 0 ? "var(--ink)" : "var(--ink-muted)"}
          />
        </div>
      ))}
    </div>
  );
}
