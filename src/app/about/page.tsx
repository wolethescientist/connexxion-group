import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Timeline } from "@/components/sections/Timeline";
import { Stats } from "@/components/sections/Stats";
import { company, px } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Connexxion Group — a diversified African holding company. Our mission, vision, journey and the people building Africa's tomorrow today.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the group"
        title={
          <>
            We are as diverse as our{" "}
            <span className="text-grad">interests.</span>
          </>
        }
        intro={company.promise}
      />

      {/* Story + image */}
      <section className="pb-24 md:pb-32">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={px(16237804, 1400)}
                  alt="Abuja, Nigeria — home of Connexxion Group"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-6">
            <Reveal>
              <p className="eyebrow mb-6">Who we are</p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-xl leading-relaxed text-ghost">
                Founded in {company.founded}, Connexxion Group began as a single
                technology firm in Abuja and grew into a diversified holding
                company.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-mute">
                Today the group operates across {company.countries.join(", ")},
                bringing together specialists in technology, engineering, energy,
                fintech, agriculture, maritime, security and human capital. Our
                people are held to the highest level of accountability — so you
                are always satisfied with your results.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-t border-white/10 py-24 md:py-32">
        <div className="shell grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          {[
            { label: "Mission", body: company.mission },
            { label: "Vision", body: company.vision },
          ].map((b, i) => (
            <Reveal key={b.label} delay={i * 0.1} className="bg-obsidian">
              <div className="flex h-full flex-col p-10 md:p-14">
                <p className="eyebrow mb-8">{b.label}</p>
                <p className="font-display text-2xl leading-[1.35] tracking-[-0.01em] text-ghost md:text-[2rem] md:leading-[1.3]">
                  {b.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Stats />
      <Timeline />
    </>
  );
}
