import type { Project } from "./types";

// Placeholder projects — replace with your real work whenever it's ready.
export const projects: Project[] = [
  {
    slug: "fieldnote",
    title: "Fieldnote",
    year: "2025",
    role: "Design & Engineering",
    summary:
      "A minimal note-taking app built for researchers doing fieldwork offline.",
    description:
      "Fieldnote strips note-taking down to what researchers actually need in the field: fast capture, reliable offline sync, and a structure that mirrors how observations actually get organized — by site, by session, by tag. Built the local-first sync engine and the entire interface, from the capture flow down to the typographic system used for transcripts.",
    tags: ["Next.js", "SQLite", "Offline-first", "Product design"],
    links: [{ label: "Case study", url: "#" }],
    featured: true,
  },
  {
    slug: "meridian",
    title: "Meridian",
    year: "2024",
    role: "Full-stack Engineer",
    summary:
      "A scheduling tool for distributed teams that actually accounts for time zones.",
    description:
      "Most scheduling tools treat time zones as an afterthought. Meridian puts them at the center — visualizing overlap windows across a team before a single meeting gets booked. Led the backend architecture for calendar sync across Google/Outlook and designed the timeline visualization that became the product's signature view.",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Calendar APIs"],
    links: [
      { label: "Case study", url: "#" },
      { label: "Live site", url: "#" },
    ],
    featured: true,
  },
  {
    slug: "constellation",
    title: "Constellation",
    year: "2024",
    role: "Design Engineer",
    summary: "An internal design system used across a nine-product portfolio.",
    description:
      "Built a token-based design system from scratch to unify nine internal products that had drifted into visual inconsistency over three years. Focused on making the system easy to adopt incrementally rather than requiring a big-bang migration — most teams switched over within a single sprint.",
    tags: ["Design systems", "React", "Storybook", "Figma"],
    links: [{ label: "Case study", url: "#" }],
    featured: true,
  },
  {
    slug: "loom-cli",
    title: "loom",
    year: "2023",
    role: "Creator",
    summary:
      "An open-source CLI for weaving markdown notes into a static knowledge base.",
    description:
      "A side project born out of frustration with heavier note-taking tools. loom takes a folder of markdown files and generates a fast, searchable static site with backlinks — no database, no server. Small enough to read in an afternoon, opinionated enough to be useful immediately.",
    tags: ["Rust", "CLI", "Open source"],
    links: [{ label: "GitHub", url: "#" }],
    featured: false,
  },
  {
    slug: "harbor",
    title: "Harbor",
    year: "2023",
    role: "Frontend Engineer",
    summary: "A lightweight expense tracker for small teams and freelancers.",
    description:
      "Redesigned and rebuilt the frontend for a small expense-tracking product, cutting time-to-first-entry from a multi-step wizard down to a single input. Focused heavily on making the numbers feel legible — tabular figures, consistent alignment, and a color system that only uses color where it's meaningful.",
    tags: ["React", "Tailwind", "Data visualization"],
    links: [{ label: "Case study", url: "#" }],
    featured: false,
  },
];
