"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const EASE = [0.16, 1, 0.3, 1] as const;

const [firstName, ...rest] = profile.name.split(" ");
const lastName = rest.join(" ");

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE }}
      className="mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center px-6 py-24"
    >
      <p className="label mb-6 text-muted">
        {profile.title} · {profile.location}
      </p>

      <h1 className="text-foreground">
        <span className="hero-name-primary block">{firstName}</span>
        <span className="hero-name-secondary block mt-2 text-muted">
          {lastName}
        </span>
      </h1>

      <p className="mt-10 max-w-xl text-lg text-muted">
        {profile.shortBio}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="border border-foreground px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
        >
          View work
        </a>
        <a
          href="#contact"
          className="border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
        >
          Get in touch
        </a>
      </div>
    </motion.section>
  );
}
