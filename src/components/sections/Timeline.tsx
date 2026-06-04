import { timeline } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Timeline() {
  return (
    <section className="border-y border-white/10 bg-obsidian py-24 md:py-32">
      <div className="shell">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-5">The journey</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-2 text-ghost">
              From a single firm to <span className="text-grad">a group.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-white/10 md:left-[8.5rem] md:block" />
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={(i % 3) * 0.06}>
              <div className="group relative grid gap-2 border-t border-white/10 py-8 md:grid-cols-[8rem_1fr] md:gap-12 md:pl-0">
                <div className="flex items-center gap-4 md:block">
                  <span className="font-display text-3xl text-emerald md:text-4xl">{t.year}</span>
                </div>
                <div className="relative md:pl-12">
                  <span className="absolute -left-[5px] top-2 hidden h-2.5 w-2.5 rounded-full bg-emerald ring-4 ring-obsidian md:block" />
                  <h3 className="font-display text-xl text-ghost md:text-2xl">{t.title}</h3>
                  <p className="mt-2 max-w-xl text-base leading-relaxed text-mute">{t.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
