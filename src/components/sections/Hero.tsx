"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { px } from "@/lib/content";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";

// Each slide pairs an image with a headline + supporting line about that sector,
// so the message changes in lockstep with the background.
// Each slide pairs an image with a headline + supporting line about that sector,
// so the message changes in lockstep with the background.
const slides = [
  {
    src: px(17323801, 1800),
    label: "Technology & Telecom",
    title: "Connexxion",
    accent: "Telecom",
    slogan: "Connecting Africa.",
    copy: "Core networks, cloud and software that keep a continent moving.",
  },
  {
    src: px(5298215, 1800),
    label: "Engineering & Construction",
    title: "Connexxion",
    accent: "Engineering",
    slogan: "Engineering progress.",
    copy: "Mechanical, civil and technical delivery for modern infrastructure.",
  },
  {
    src: px(9893729, 1800),
    label: "Energy & Resources",
    title: "Connexxion",
    accent: "Energy",
    slogan: "Powering tomorrow.",
    copy: "Decision-grade expertise across the entire energy value chain.",
  },
  {
    src: px(14314165, 1800),
    label: "Agriculture & Allied",
    title: "Connexxion",
    accent: "Agro Allied",
    slogan: "Growing the future.",
    copy: "Technology and youth driving the agricultural value chain.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  const slide = slides[i];

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
              src={slide.src}
              alt={slide.label}
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
        {/* Dynamic headline — cross-fades in sync with the background image */}
        <h1 className="display-1 relative min-h-[1.96em] max-w-5xl text-ghost">
          <AnimatePresence>
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 1, ease }}
              className="absolute bottom-0 left-0 block max-w-5xl will-change-transform"
            >
              {slide.title}{" "}
              <span className="text-grad">{slide.accent}</span>
            </motion.span>
          </AnimatePresence>
        </h1>

        <div className="mt-9 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          {/* Dynamic supporting line — cross-fades with the headline */}
          <div className="relative min-h-[8.5rem] w-full max-w-xl sm:min-h-[7.5rem]">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.9, ease, delay: 0.06 }}
                className="absolute left-0 top-0 w-full will-change-transform"
              >
                {/* Slogan in brand white */}
                <p className="text-2xl md:text-3xl font-display font-semibold text-ghost tracking-tight mb-2.5">
                  {slide.slogan}
                </p>
                {/* Description copy with increased font size */}
                <p className="text-base md:text-lg leading-relaxed text-mute">
                  {slide.copy}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
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
          </motion.div>
        </div>

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
          <div className="relative h-4 flex-1">
            <AnimatePresence>
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 6 }}
                transition={{ duration: 0.7, ease }}
                className="absolute left-0 top-0 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-mute"
              >
                {slide.label}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
