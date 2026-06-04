import { stats, company } from "@/lib/content";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { NodeField } from "@/components/ui/NodeField";

export function Stats() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <NodeField className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald/10 blur-[140px]" />

      <div className="shell relative">
        <Reveal>
          <p className="mx-auto mb-16 max-w-3xl text-center font-display text-2xl leading-snug text-ghost md:text-4xl md:leading-[1.3]">
            A footprint that spans{" "}
            <span className="text-grad">{company.countries.join(", ")}</span>
            {" "}— and a track record measured in outcomes.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-y-12 border-t border-white/10 pt-14 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <span className="font-display text-5xl tracking-[-0.03em] text-ghost md:text-7xl">
                  {s.value >= 2000 ? (
                    s.value
                  ) : (
                    <CountUp to={s.value} suffix={s.suffix} />
                  )}
                </span>
                <span className="mt-3 max-w-[12rem] text-sm text-mute">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
