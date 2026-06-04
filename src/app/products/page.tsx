import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Software products built by Connexxion Group — SmartRent Plus, iHumane, WeMoove, CNX Retail, iCoop, CNX SchoolPro and more.",
};

// Bento rhythm: which tiles span 2 columns on large screens
const wide = new Set([0, 3, 4, 7]);

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products & platforms"
        title={
          <>
            Software that moves <span className="text-grad">industries.</span>
          </>
        }
        intro="From property and mobility to HR, retail, education and government — the platforms below are built, run and scaled inside the group."
      />

      <section className="pb-28 md:pb-36">
        <div className="shell">
          <Stagger className="grid auto-rows-[20rem] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <StaggerItem
                key={p.name}
                className={wide.has(i) ? "lg:col-span-2" : "lg:col-span-1"}
              >
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

                  <div className="relative z-10 p-6 md:p-7">
                    <h2 className="font-display text-2xl text-ghost md:text-3xl">{p.name}</h2>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-ghost/70 opacity-0 transition-all duration-500 group-hover:opacity-100 md:max-h-0 md:translate-y-2 md:overflow-hidden md:transition-all md:duration-500 md:group-hover:max-h-32 md:group-hover:translate-y-0">
                      {p.description}
                    </p>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
