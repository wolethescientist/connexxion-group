"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { company, px } from "@/lib/content";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";

const slides = [
  { src: px(16237804, 1800), label: "Abuja · Technology & Telecom" },
  { src: px(5298215, 1800), label: "Engineering & Construction" },
  { src: px(9893729, 1800), label: "Energy & Resources" },
  { src: px(14314165, 1800), label: "Agriculture & Allied" },
];

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      {/* Image stack */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slides[i].src}
              alt={slides[i].label}
              className={`h-full w-full object-cover ${i % 2 === 0 ? "kenburns-a" : "kenburns-b"}`}
            />
          </motion.div>
        </AnimatePresence>
        {/* Grades */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/45 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_40%,rgba(6,53,31,0.35)_100%)]" />
      </div>

      {/* Content */}
      <div className="shell relative z-10 pb-14 pt-36 md:pb-20">
        <h1 className="display-1 max-w-5xl text-ghost">
          {["Recreating", "Tomorrow"].map((w, wi) => (
            <span key={wi} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 + wi * 0.1 }}
              >
                {w}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden">
            <motion.span
              className="inline-block font-display text-grad"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            >
              Today.
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          className="mt-9 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <p className="max-w-lg text-lg leading-relaxed text-ghost/80">
            {company.promise}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/subsidiaries"
              className="group inline-flex items-center gap-2.5 rounded-full bg-emerald px-7 py-3.5 text-sm font-medium text-[#04120a] transition-all duration-300 hover:bg-emerald-bright hover:shadow-[0_8px_44px_-8px_rgba(15,166,89,0.7)]"
            >
              Explore our companies
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-ghost transition-all duration-300 hover:border-emerald/60 hover:bg-white/[0.04]"
            >
              Our story
              <ArrowUpRight className="h-4 w-4 text-emerald" />
            </Link>
          </div>
        </motion.div>

        {/* Slide indicators */}
        <div className="mt-12 flex items-center gap-6 border-t border-white/10 pt-6">
          <div className="flex items-center gap-2">
            {slides.map((_, s) => (
              <button
                key={s}
                onClick={() => setI(s)}
                aria-label={`Show ${slides[s].label}`}
                className="group relative h-1 w-10 overflow-hidden rounded-full bg-white/15"
              >
                <span
                  className={`absolute inset-0 origin-left rounded-full bg-emerald transition-transform duration-500 ${
                    s === i ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.span
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 6 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-mute"
            >
              {slides[i].label}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
