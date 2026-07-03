"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/data/types";

export function ProjectCard({ project }: { project: Project }) {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const primaryLink = project.links[0];

  return (
    <a
      href={primaryLink?.url ?? "#"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      className="paper group relative block overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-transform duration-300 ease-out hover:-translate-y-1"
    >
      {hovered && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          style={{ left: cursor.x, top: cursor.y }}
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-surface hidden md:block"
        >
          View →
        </motion.span>
      )}

      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-2xl">{project.title}</h3>
        <span className="shrink-0 text-sm text-muted">{project.year}</span>
      </div>

      <p className="mt-2 text-sm text-accent">{project.role}</p>
      <p className="mt-4 text-muted">{project.summary}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border px-3 py-1 text-xs text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
    </a>
  );
}
