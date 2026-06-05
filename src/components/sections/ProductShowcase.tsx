"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";

const ease = [0.16, 1, 0.3, 1] as const;
const AUTOPLAY_MS = 5000;
const TICK = 40;

/**
 * Refined editorial slideshow for the in-house software products.
 * One product per slide: a ken-burns image stage crossfades while the
 * caption resolves alongside a large index numeral. Autoplay is pausable
 * (hover/focus), driven by the same progress value that fills the rail,
 * so the visual and the advance never drift apart.
 */
export function ProductShowcase() {
  const total = products.length;
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = products[index];

  const go = useCallback(
    (next: number) => {
      setIndex((next + total) % total);
      setProgress(0);
    },
    [total]
  );

  // Honour reduced-motion: don't auto-advance.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) setPaused(true);
  }, []);

  // Progress-driven autoplay — advances when the bar fills.
  useEffect(() => {
    if (paused) return;
    if (progress >= 100) {
      setIndex((i) => (i + 1) % total);
      setProgress(0);
      return;
    }
    const id = setTimeout(() => setProgress((p) => p + (TICK / AUTOPLAY_MS) * 100), TICK);
    return () => clearTimeout(id);
  }, [progress, paused, total]);

  return (
    <section className="relative overflow-hidden border-t border-white/10 py-24 md:py-32">
      <div className="shell">
        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow mb-5">[ 04 ] The products</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2 max-w-2xl text-ghost">
                Software that runs the{" "}
                <span className="text-grad">everyday.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-mute">
              A portfolio of platforms built in-house across the group — from
              proptech and mobility to government and the classroom.
            </p>
          </Reveal>
        </div>

        {/* ===== The slideshow ===== */}
        <Reveal delay={0.05}>
          <div
            className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            role="group"
            aria-roledescription="carousel"
            aria-label="Connexxion products"
          >
            {/* Image stage */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-white/10 bg-coal">
                <AnimatePresence mode="sync">
                  <motion.img
                    key={current.image}
                    src={current.image}
                    alt={`${current.name} — ${current.category}`}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 via-transparent to-transparent" />
                {/* Counter */}
                <div className="absolute left-6 top-5 font-mono text-xs tracking-[0.2em] text-ghost/80">
                  <span className="text-emerald">{String(index + 1).padStart(2, "0")}</span>
                  <span className="mx-1 text-ghost/40">/</span>
                  {String(total).padStart(2, "0")}
                </div>
              </div>
            </div>

            {/* Caption + controls */}
            <div className="lg:col-span-5">
              <div className="relative min-h-[15rem]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.name}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.5, ease }}
                  >
                    <p className="eyebrow mb-4">{current.category}</p>
                    <h3 className="font-display text-4xl leading-[1.05] text-ghost md:text-5xl">
                      {current.name}
                    </h3>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-mute">
                      {current.description}
                    </p>
                    <a
                      href={current.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 px-6 py-3 text-sm text-ghost transition-all duration-300 hover:border-emerald/60 hover:bg-white/[0.04]"
                    >
                      Visit product
                      <ArrowUpRight className="h-4 w-4 text-emerald transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Control bar */}
              <div className="mt-10 flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => go(index - 1)}
                    aria-label="Previous product"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-ghost transition-all duration-300 hover:border-emerald hover:text-emerald"
                  >
                    <ArrowRight className="h-4 w-4 rotate-180" />
                  </button>
                  <button
                    onClick={() => go(index + 1)}
                    aria-label="Next product"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-ghost transition-all duration-300 hover:border-emerald hover:text-emerald"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Segmented progress rail (also navigation) */}
                <div className="flex flex-1 items-center gap-1.5">
                  {products.map((p, i) => (
                    <button
                      key={p.name}
                      onClick={() => go(i)}
                      aria-label={`Go to ${p.name}`}
                      aria-current={i === index}
                      className="group relative h-1 flex-1 overflow-hidden rounded-full bg-white/12"
                    >
                      <span
                        className="absolute inset-y-0 left-0 rounded-full bg-emerald transition-[width] duration-100 ease-linear group-hover:bg-emerald-bright"
                        style={{
                          width: i < index ? "100%" : i === index ? `${progress}%` : "0%",
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
