import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "./Icons";

type Variant = "solid" | "ghost" | "light";

const base =
  "group inline-flex items-center gap-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer";

const variants: Record<Variant, string> = {
  solid:
    "bg-emerald text-[#04120a] px-6 py-3 hover:bg-emerald-bright hover:shadow-[0_8px_40px_-8px_rgba(15,166,89,0.6)]",
  ghost:
    "border border-white/15 text-ghost px-6 py-3 hover:border-emerald/60 hover:bg-white/[0.03]",
  light:
    "border border-black/10 text-charcoal px-6 py-3 hover:border-emerald hover:bg-black/[0.02]",
};

export function Button({
  href,
  children,
  variant = "solid",
  external,
  className = "",
  withArrow = true,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  withArrow?: boolean;
}) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
