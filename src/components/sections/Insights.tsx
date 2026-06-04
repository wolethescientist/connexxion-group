import { insights } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";

export function Insights() {
  return (
    <section className="py-24 md:py-32">
      <div className="shell">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow mb-5">[ 07 ] Insights</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2 text-ghost">
                Thinking from <span className="text-grad">the group.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <Stagger className="grid gap-8 md:grid-cols-3">
          {insights.map((p) => (
            <StaggerItem key={p.title}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[16/11] overflow-hidden rounded-xl border border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-ink/50 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ghost backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl leading-snug text-ghost transition-colors group-hover:text-emerald">
                    {p.title}
                  </h3>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald" />
                </div>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-faint">{p.date}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
