import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "crosscode",
    title: "CrossCode",
    year: "2025",
    role: "Founder & AI Engineer",
    summary:
      "An AI HTS classification platform for licensed customs brokers.",
    description:
      "CrossCode maps free-text product descriptions to 10-digit HTS codes in under 3 seconds, compressing 10–15 minute manual lookups into a single query. Built the RAG pipeline over the full Harmonized Tariff Schedule (19,000+ codes) using pgvector embeddings and constrained decoding to suppress hallucinated codes, with an eval harness graded against broker ground truth. Every broker correction is re-indexed into the retrieval layer, so accuracy compounds with usage. Running paid pilots with SF/Bay Area brokerages, owning product, sales, and infrastructure end-to-end.",
    tags: ["Python", "FastAPI", "RAG", "pgvector", "Next.js"],
    links: [],
    featured: true,
  },
  {
    slug: "look-agent",
    title: "Production AI Agent",
    year: "2025",
    role: "AI Engineer Intern, LOOK",
    summary:
      "The first AI capability shipped into LOOK's production MVP.",
    description:
      "Independently architected and shipped a multi-step AI agent into LOOK's production MVP — the integration pattern the team extended for every downstream feature. Designed the agent's tool-use schema, prompt chain, and fallback logic, integrating third-party tooling with custom orchestration so the agent could autonomously complete core user tasks without human intervention. Owned end-to-end delivery: prompt engineering, observability, and iterative eval cycles. The system was formally designated proprietary IP by the company.",
    tags: ["Agent orchestration", "Prompt engineering", "Eval harnesses"],
    links: [],
    featured: true,
  },
  {
    slug: "signal",
    title: "Signal",
    year: "2024",
    role: "Creator",
    summary: "An agentic VC intelligence pipeline.",
    description:
      "An autonomous research agent that scrapes, deduplicates, and entity-extracts startup news across TechCrunch and peer sources — compressing hours of analyst sourcing into a 5-minute morning briefing. A modular Python ingestion pipeline uses spaCy for NER and company resolution over unstructured text, with production-grade error handling and retry logic.",
    tags: ["Python", "spaCy", "NER", "Automation"],
    links: [{ label: "GitHub", url: "https://github.com/LaxRaj/Signal" }],
    featured: true,
  },
  {
    slug: "atlas",
    title: "Atlas",
    year: "2024",
    role: "Creator",
    summary: "A quantitative personal finance engine.",
    description:
      "A Python engine applying Modern Portfolio Theory and tax-loss harvesting under IRS wash-sale constraints — turning quantitative finance techniques usually locked behind institutional tooling into something a single investor can run themselves.",
    tags: ["Python", "Quant finance", "Portfolio theory"],
    links: [
      { label: "GitHub", url: "https://github.com/LaxRaj/project-atlas" },
    ],
    featured: false,
  },
];
