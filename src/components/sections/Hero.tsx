"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-5xl flex-col justify-center px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mb-6 text-sm tracking-[0.14em] uppercase text-muted"
      >
        {profile.title} · {profile.location}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        className="font-display text-[clamp(2.5rem,7vw,5rem)] leading-[1.05] text-balance"
      >
        {profile.name}.{" "}
        <span className="text-muted">{profile.tagline}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        className="mt-8 max-w-xl text-lg text-muted"
      >
        {profile.shortBio}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <a
          href="#projects"
          className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
        >
          View work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
        >
          Get in touch
        </a>
      </motion.div>
    </section>
  );
}
