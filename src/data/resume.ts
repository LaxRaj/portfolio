import type { ResumeData } from "./types";

export const resume: ResumeData = {
  summary:
    "AI Engineer and founder shipping LLM-powered products into regulated B2B workflows. Currently building and selling CrossCode, an AI HTS classification platform piloting with SF Bay Area customs brokers. Prior production experience integrating autonomous AI agents into early-stage MVPs. Comfortable across the full stack — RAG, agent orchestration, eval harnesses, and the Next.js/Postgres surfaces that ship them.",
  experience: [
    {
      company: "CrossCode",
      role: "Founder & AI Engineer",
      start: "Sep 2025",
      end: "Present",
      bullets: [
        "Designed and shipped a retrieval-augmented LLM classification engine that maps free-text product descriptions to 10-digit HTS codes in under 3 seconds, compressing 10–15 minute manual lookups into a single query for licensed brokers.",
        "Built the RAG pipeline over the full Harmonized Tariff Schedule (19,000+ codes) using pgvector embeddings and constrained decoding to suppress hallucinated codes; designed an evaluation harness with broker-graded ground truth.",
        "Architected the broker-in-the-loop correction workflow — every override is re-indexed into the retrieval layer so accuracy compounds with usage.",
        "Running paid pilots with SF/Bay Area brokerages (CBFANC ecosystem); owning product, sales, and infrastructure end-to-end.",
      ],
      stack: ["Python", "FastAPI", "OpenAI API", "Anthropic API", "pgvector", "Postgres", "Next.js", "Vercel"],
    },
    {
      company: "LOOK",
      role: "AI Engineer Intern",
      start: "Jun 2025",
      end: "Aug 2025",
      bullets: [
        "Independently architected and shipped a multi-step AI agent into LOOK's production MVP — the first AI capability in the product and the integration pattern the team extended for downstream features.",
        "Designed the agent's tool-use schema, prompt chain, and fallback logic, integrating lovable.dev tooling with custom orchestration so the agent could autonomously complete core user tasks without human intervention.",
        "Owned end-to-end delivery — prompt engineering, observability, and iterative eval cycles; the system was formally designated proprietary IP by the company.",
        "Led 12+ pairing sessions across the intern team and resolved 7 production-blocking bugs, materially accelerating the MVP timeline.",
      ],
      stack: ["Agent orchestration", "Prompt engineering", "Observability"],
    },
    {
      company: "Think Round Inc.",
      role: "Full-Stack Developer Intern",
      start: "Nov 2023",
      end: "Jul 2024",
      bullets: [
        "Designed and shipped WCAG-compliant, responsive web interfaces serving 5,000+ users across a nonprofit arts initiative.",
        "Led a 15-person developer team across 3 concurrent web projects; owned task tracking, code review, and deployment workflows.",
      ],
      stack: ["React", "Accessibility", "Deployment"],
    },
    {
      company: "Wings-Within",
      role: "Software Engineer Intern",
      start: "Jun 2023",
      end: "Nov 2023",
      bullets: [
        "Built full-stack features (React, Node.js, MongoDB) supporting internal operations; redesigned the mobile landing page and lifted conversion 30%.",
      ],
      stack: ["React", "Node.js", "MongoDB"],
    },
  ],
  education: [
    {
      institution: "San Francisco State University",
      degree: "B.S. Computer Science",
      start: "",
      end: "Expected May 2026",
    },
    {
      institution: "University of Pennsylvania (Coursera)",
      degree: "Finance & Quant Modeling for Analysts",
      start: "",
      end: "Jul 2025",
    },
  ],
  skills: [
    {
      category: "AI / ML",
      items: [
        "OpenAI API",
        "Anthropic API",
        "RAG",
        "Embeddings",
        "pgvector",
        "Prompt engineering",
        "Agent orchestration",
        "Eval harnesses",
      ],
    },
    {
      category: "Languages",
      items: ["Python", "TypeScript", "Java", "OCaml"],
    },
    {
      category: "Frameworks & Infra",
      items: [
        "Next.js",
        "React",
        "React Native",
        "FastAPI",
        "Express.js",
        "Postgres",
        "MongoDB",
        "Vercel",
        "CI/CD",
      ],
    },
  ],
  leadership: [
    "VP, Professional Development — Muslim Tech Collaborative (Aug 2024 – Present)",
    "Vice-President, Tennis Club — SFSU (Aug 2025 – Present)",
    "Organizer & Web-Master — SF Hacks, sfhacks.io (Aug 2023 – May 2024)",
  ],
  pdfUrl: "/resume.pdf",
};
