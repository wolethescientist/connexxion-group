import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";
import { careers, openings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your career at Connexxion Group — a diversified African holding company. Explore open roles across technology, engineering, fintech, security and more.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Do the best work of your{" "}
            <span className="text-grad">career.</span>
          </>
        }
        intro={careers.intro}
      />

      {/* Open positions — the focus of the page */}
      <section className="pb-24 md:pb-32">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <h2 className="display-2 text-ghost">
                Open <span className="text-grad">positions</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-mute">
                {openings.length} roles · across the group
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            {openings.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.05} y={16} className="bg-obsidian">
                <a
                  href={`/contact?role=${encodeURIComponent(o.title)}`}
                  className="group flex flex-col gap-4 p-6 transition-colors duration-300 hover:bg-coal md:flex-row md:items-center md:gap-8 md:p-7"
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl text-ghost md:text-2xl">
                      {o.title}
                    </h3>
                    <p className="mt-1 text-sm text-mute">{o.team}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 md:shrink-0">
                    {[o.type, o.location].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/12 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-mute"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-ghost transition-all duration-300 group-hover:border-emerald group-hover:bg-emerald group-hover:text-[#04120a]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-6 text-sm text-faint">
              Don&rsquo;t see a fit?{" "}
              <a href="/contact" className="text-emerald link-underline">
                Introduce yourself
              </a>{" "}
              — we always want to meet exceptional people.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Connexxion — compact */}
      <section className="border-t border-white/10 py-20 md:py-24">
        <div className="shell">
          <Reveal>
            <p className="eyebrow mb-10">Why Connexxion</p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {careers.values.map((v, i) => (
              <Reveal key={v.no} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-white/10 bg-obsidian p-7">
                  <span className="font-mono text-sm text-emerald">{v.no}</span>
                  <h3 className="mt-4 font-display text-xl text-ghost">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits — compact */}
      <section className="border-t border-white/10 py-20 md:py-24">
        <div className="shell">
          <Reveal>
            <p className="eyebrow mb-10">What we offer</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {careers.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border border-white/10 bg-obsidian p-6 transition-colors duration-300 hover:border-emerald/40">
                  <div className="mb-4 h-1 w-8 rounded-full bg-emerald transition-all duration-300 group-hover:w-12" />
                  <h3 className="font-display text-lg text-ghost">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mute">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring process — compact */}
      <section className="border-t border-white/10 py-20 md:py-24">
        <div className="shell">
          <Reveal>
            <p className="eyebrow mb-10">How hiring works</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {careers.process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-obsidian p-6">
                  <span className="font-mono text-sm text-emerald">{p.step}</span>
                  <h3 className="mt-3 font-display text-lg text-ghost">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mute">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
