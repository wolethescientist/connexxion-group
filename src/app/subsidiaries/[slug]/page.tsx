import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { subsidiaries, products } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ArrowUpRight, ArrowRight, Plus } from "@/components/ui/Icons";

export function generateStaticParams() {
  return subsidiaries.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = subsidiaries.find((x) => x.slug === slug);
  if (!s) return { title: "Company" };
  return { title: s.name, description: s.description };
}

export default async function SubsidiaryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = subsidiaries.findIndex((x) => x.slug === slug);
  if (idx === -1) notFound();
  const s = subsidiaries[idx];
  const next = subsidiaries[(idx + 1) % subsidiaries.length];

  // Resolve this subsidiary's product names to full product records
  const builtProducts = (s.products ?? [])
    .map((name) => products.find((p) => p.name === name))
    .filter((p): p is (typeof products)[number] => Boolean(p));

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80svh] items-end overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={s.image}
            alt={s.name}
            className="h-full w-full object-cover kenburns-a"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-transparent" />
        </div>

        <div className="shell relative z-10 pb-16 pt-40">
          <Reveal>
            <Link
              href="/subsidiaries"
              className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-mute transition-colors hover:text-emerald"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              All companies
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="eyebrow mb-5">{s.sector}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-1 max-w-4xl text-ghost">{s.name}</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ghost/80">
              {s.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="py-24 md:py-32">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-6">Overview</p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="font-display text-2xl leading-[1.4] tracking-[-0.01em] text-ghost md:text-3xl">
                {s.description}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-lg leading-relaxed text-mute">{s.long}</p>
            </Reveal>

            {s.url && (
              <Reveal delay={0.15}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-emerald px-7 py-3.5 text-sm font-medium text-[#04120a] transition-all duration-300 hover:bg-emerald-bright hover:shadow-[0_8px_44px_-8px_rgba(15,166,89,0.7)]"
                >
                  Visit {s.name.split(" ")[0]}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Reveal>
            )}
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-obsidian p-8">
                <p className="eyebrow mb-6">What they do</p>
                <ul className="space-y-4">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-ghost/90">
                      <Plus className="mt-1 h-4 w-4 shrink-0 text-emerald" />
                      <span className="leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>

                {(s.established || s.clients) && (
                  <div className="mt-8 space-y-5 border-t border-white/10 pt-6">
                    {s.established && (
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                          Established
                        </p>
                        <p className="mt-1 text-ghost">{s.established}</p>
                      </div>
                    )}
                    {s.clients && (
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                          Selected clients
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {s.clients.map((c) => (
                            <span
                              key={c}
                              className="rounded-full border border-white/10 px-3 py-1 text-sm text-mute"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Products built by this subsidiary */}
      {builtProducts.length > 0 && (
        <section className="border-t border-white/10 py-24 md:py-32">
          <div className="shell">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <Reveal>
                <div>
                  <p className="eyebrow mb-5">Products</p>
                  <h2 className="display-2 text-ghost">
                    Built by{" "}
                    <span className="text-grad">{s.name.split(" ")[0]}</span>
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="max-w-xs text-sm leading-relaxed text-mute">
                  Software products designed, built and shipped by the {s.name.split(" ")[0]} team.
                </p>
              </Reveal>
            </div>

            <Stagger className="mt-12 grid auto-rows-[18rem] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {builtProducts.map((p) => (
                <StaggerItem key={p.name}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex h-full flex-col justify-end overflow-hidden rounded-2xl border border-white/10"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent transition-opacity duration-500 group-hover:from-ink/95" />

                    <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-ink/40 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ghost backdrop-blur">
                      {p.category}
                    </span>
                    <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-ink/40 text-ghost backdrop-blur transition-all duration-300 group-hover:bg-emerald group-hover:text-[#04120a]">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>

                    <div className="relative z-10 p-6">
                      <h3 className="font-display text-2xl text-ghost">{p.name}</h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-ghost/70">
                        {p.description}
                      </p>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* Next company */}
      <section className="border-t border-white/10">
        <Link href={`/subsidiaries/${next.slug}`} className="group block">
          <div className="shell flex items-center justify-between py-14 md:py-20">
            <div>
              <p className="eyebrow mb-3">Next company</p>
              <p className="font-display text-3xl text-mute transition-colors duration-300 group-hover:text-ghost md:text-5xl">
                {next.name}
              </p>
            </div>
            <ArrowUpRight className="h-8 w-8 shrink-0 text-mute transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-emerald md:h-12 md:w-12" />
          </div>
        </Link>
      </section>
    </>
  );
}
