"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

// Lenis smooths wheel/trackpad only; touch scrolling stays native (lighter on
// mobile). Global CSS handles prefers-reduced-motion.
export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.12, wheelMultiplier: 1, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
