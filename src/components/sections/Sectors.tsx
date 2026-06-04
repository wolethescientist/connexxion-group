import Link from "next/link";
import { sectors } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";

export function Sectors() {
  return (
    <section className="relative border-y border-white/10 bg-obsidian py-24 md:py-32">
      <div className="shell">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow mb-5">[ 02 ] Where we operate</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2 max-w-xl text-ghost">
                Eight industries.<br />
                <span className="text-grad">One standard.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/subsidiaries"
              className="group inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-emerald"
            >
              See the companies behind them
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s) => (
            <StaggerItem key={s.name}>
              <div className="group relative h-72 overflow-hidden rounded-2xl border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/5 transition-opacity duration-500 group-hover:from-ink/95" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-xl tracking-[-0.01em] text-ghost">
                    {s.name}
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-ghost/75 opacity-0 transition-all duration-500 group-hover:max-h-28 group-hover:opacity-100">
                    {s.blurb}
                  </p>
                </div>
                <span className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-emerald opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
