import { pillars } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function WhyConnexxion() {
  return (
    <section className="border-y border-white/10 bg-obsidian py-24 md:py-32">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow mb-5">[ 04 ] Why Connexxion</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2 text-ghost">
                Built like a<br />
                <span className="text-grad">partner.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-mute">
                We don&rsquo;t sell tickets and tasks. We embed, advise and stay
                accountable for the result — long after handover.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8 lg:pt-2">
            <div className="flex flex-col">
              {pillars.map((p, i) => (
                <Reveal key={p.no} delay={i * 0.08}>
                  <div className="group flex flex-col gap-4 border-t border-white/10 py-9 last:border-b md:flex-row md:items-start md:gap-12">
                    <span className="font-mono text-sm text-emerald">{p.no}</span>
                    <h3 className="font-display text-2xl text-ghost transition-colors md:w-72 md:shrink-0 md:text-3xl">
                      {p.title}
                    </h3>
                    <p className="max-w-md text-base leading-relaxed text-mute">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
