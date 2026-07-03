import type { Profile } from "./types";

export const profile: Profile = {
  name: "Lakshyaraj Singh Bhati",
  title: "AI Engineer & Founder",
  tagline: "I ship LLM-powered products into regulated B2B workflows.",
  location: "San Francisco, CA",
  email: "lbhati2804@gmail.com",
  availability: "Building CrossCode — open to interesting conversations",
  shortBio:
    "AI engineer and founder building CrossCode, an AI HTS classification platform for licensed customs brokers.",
  bio: [
    "I'm an AI engineer and founder shipping LLM-powered products into regulated B2B workflows. I'm currently building and selling CrossCode, an AI HTS classification platform piloting with SF Bay Area customs brokers.",
    "Before that, I shipped a production AI agent into an early-stage MVP as the first AI capability in the product — the integration pattern the team extended for every feature after it. I'm comfortable across the full stack: RAG, agent orchestration, eval harnesses, and the Next.js/Postgres surfaces that actually ship them.",
    "Outside of client and product work, I'm usually building small research agents, reading about retrieval systems, or rebuilding this site.",
  ],
  socials: [
    { label: "Email", url: "mailto:lbhati2804@gmail.com" },
    { label: "GitHub", url: "https://github.com/LaxRaj" },
    { label: "LinkedIn", url: "https://linkedin.com/in/lbhati" },
  ],
  skills: [
    "Python",
    "TypeScript",
    "Next.js",
    "FastAPI",
    "OpenAI API",
    "Anthropic API",
    "RAG",
    "pgvector",
    "Postgres",
  ],
};
