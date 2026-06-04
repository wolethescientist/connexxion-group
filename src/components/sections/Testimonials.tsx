"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d: number) =>
    setI((p) => (p + d + testimonials.length) % testimonials.length);

  return (
    <section className="border-y border-white/10 bg-obsidian py-24 md:py-36">
      <div className="shell">
        <Reveal>
          <p className="eyebrow mb-12">[ 06 ] In their words</p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-display text-2xl leading-[1.35] tracking-[-0.01em] text-ghost md:text-[2.6rem] md:leading-[1.25]">
                  <span className="text-emerald">&ldquo;</span>
                  {t.quote}
                  <span className="text-emerald">&rdquo;</span>
                </p>
                <footer className="mt-8 flex items-center gap-3 text-sm">
                  <span className="h-px w-8 bg-emerald" />
                  <span className="text-ghost">{t.name}</span>
                  <span className="text-faint">·</span>
                  <span className="text-mute">{t.org}</span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="flex items-end gap-3 lg:col-span-3 lg:justify-end">
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/15 text-ghost transition-colors hover:border-emerald hover:text-emerald"
            >
              <ArrowRight className="h-5 w-5 rotate-180" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/15 text-ghost transition-colors hover:border-emerald hover:text-emerald"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-10 flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-1 cursor-pointer rounded-full transition-all duration-500 ${
                idx === i ? "w-10 bg-emerald" : "w-5 bg-white/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
