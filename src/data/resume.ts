import type { ResumeData } from "./types";

// Placeholder resume data — replace with your real history whenever it's ready.
export const resume: ResumeData = {
  summary:
    "Software engineer with a design-forward approach to building products. Comfortable owning a feature end to end — from data model to the pixel — and most effective on small teams that move fast and care about craft.",
  experience: [
    {
      company: "Anchor Labs",
      role: "Software Engineer",
      start: "2023",
      end: "Present",
      bullets: [
        "Led the frontend rebuild of the core product, moving from a legacy jQuery app to a React/Next.js codebase with a shared design system.",
        "Designed and shipped a real-time collaboration feature used daily by 80% of active accounts within two months of launch.",
        "Introduced a component library that cut new-feature build time by roughly a third across the product team.",
      ],
      stack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      company: "Northfield Studio",
      role: "Product Design Engineer",
      start: "2021",
      end: "2023",
      bullets: [
        "Worked across three client engagements as the sole engineer translating Figma designs into production frontends.",
        "Built an internal design-token pipeline that kept Figma and code in sync across client projects.",
        "Partnered directly with founders on early-stage products, often owning both design decisions and implementation.",
      ],
      stack: ["React", "Figma", "Tailwind CSS", "Vercel"],
    },
    {
      company: "Self-directed",
      role: "Freelance Developer",
      start: "2020",
      end: "2021",
      bullets: [
        "Delivered small web projects for local businesses and early-stage founders, from marketing sites to booking tools.",
        "Learned to scope, price, and ship independently — the foundation for how I still approach projects today.",
      ],
      stack: ["JavaScript", "WordPress", "CSS"],
    },
  ],
  education: [
    {
      institution: "Indian Institute of Technology",
      degree: "B.Tech in Computer Science",
      start: "2016",
      end: "2020",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "SQL"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend",
      items: ["Node.js", "PostgreSQL", "REST APIs", "Auth"],
    },
    {
      category: "Design",
      items: ["Figma", "Design systems", "Typography", "Prototyping"],
    },
  ],
  pdfUrl: "/resume.pdf",
};
