"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const EASE = [0.16, 1, 0.3, 1] as const;

const [firstName, middleName, ...rest] = profile.name.split(" ");
const lastName = rest.join(" ");

export function Hero() {
  return (
    <section className="dotted-bg">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="frame grid gap-16 overflow-hidden p-8 sm:p-12 md:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] md:p-16">
          <div className="flex min-w-0 flex-col justify-center [container-type:inline-size]">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="label mb-6 text-muted"
            >
              {profile.title} · {profile.location}
            </motion.p>

            <h1>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, ease: EASE }}
                  className="hero-name-primary block uppercase"
                >
                  {firstName}
                </motion.span>
              </span>
              <span className="mt-2 block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.06, ease: EASE }}
                  className="hero-name-secondary block uppercase"
                >
                  {middleName}
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
                  className="hero-name-secondary block text-accent uppercase"
                >
                  {lastName}
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              className="mt-10 max-w-md text-lg text-muted"
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
                href="#work"
                className="border border-foreground px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
              >
                View work
              </a>
              <a
                href="#coffee"
                className="border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            className="flex flex-col justify-center gap-1 md:pl-8"
          >
            {profile.attributes.map((attr) => (
              <span
                key={attr.label}
                style={
                  {
                    "--tile-hover-color": `var(${attr.colorVar})`,
                  } as React.CSSProperties
                }
                className="tile hero-name-secondary w-fit cursor-default text-2xl uppercase sm:text-3xl"
              >
                {attr.label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
