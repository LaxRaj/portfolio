"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const EASE = [0.16, 1, 0.3, 1] as const;

const [firstName, ...rest] = profile.name.split(" ");
const lastName = rest.join(" ");

export function Hero() {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="label mb-6 text-muted"
      >
        {profile.title} · {profile.location}
      </motion.p>

      <h1 className="text-foreground">
        <span className="block overflow-hidden">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="hero-name-primary block"
          >
            {firstName}
          </motion.span>
        </span>
        <span className="mt-2 block overflow-hidden">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, delay: 0.08, ease: EASE }}
            className="hero-name-secondary block text-accent"
          >
            {lastName}
          </motion.span>
        </span>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
        className="mt-10 max-w-xl text-lg text-muted"
      >
        {profile.shortBio}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
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
      </motion.div>
    </section>
  );
}
