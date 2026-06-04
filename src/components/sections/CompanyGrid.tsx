import Link from "next/link";
import type { Subsidiary } from "@/lib/content";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";

export function CompanyGrid({
  items,
  columns = 3,
}: {
  items: Subsidiary[];
  columns?: 2 | 3;
}) {
  const cols =
    columns === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <Stagger className={`grid grid-cols-1 gap-5 ${cols}`}>
      {items.map((s) => (
        <StaggerItem key={s.slug}>
          <Link
            href={`/subsidiaries/${s.slug}`}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-coal transition-colors duration-500 hover:border-emerald/40"
          >
            <div className="relative aspect-[16/11] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.image}
                alt={s.name}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/20 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink/50 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ghost backdrop-blur-sm">
                {s.sector}
              </span>
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-ink/40 text-ghost backdrop-blur-sm transition-all duration-300 group-hover:bg-emerald group-hover:text-[#04120a]">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl tracking-[-0.01em] text-ghost transition-colors duration-300 group-hover:text-emerald md:text-2xl">
                {s.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">
                {s.tagline}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-faint transition-colors duration-300 group-hover:text-emerald">
                Explore company
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
            <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-emerald to-transparent transition-all duration-500 group-hover:w-full" />
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
