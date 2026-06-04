import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Sectors } from "@/components/sections/Sectors";
import { CompanyGrid } from "@/components/sections/CompanyGrid";
import { Stats } from "@/components/sections/Stats";
import { WhyConnexxion } from "@/components/sections/WhyConnexxion";
import { Testimonials } from "@/components/sections/Testimonials";
import { Insights } from "@/components/sections/Insights";
import { PartnerMarquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";
import { subsidiaries } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <PartnerMarquee />
      <Manifesto />
      <Sectors />

      {/* Companies index */}
      <section className="py-24 md:py-32">
        <div className="shell">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Reveal>
                <p className="eyebrow mb-5">[ 03 ] The companies</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="display-2 max-w-xl text-ghost">
                  A family of companies,<br />
                  <span className="text-grad">each a leader.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link
                href="/subsidiaries"
                className="group inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-emerald"
              >
                View all companies
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
          <CompanyGrid items={subsidiaries.slice(0, 6)} />
        </div>
      </section>

      <Stats />
      <WhyConnexxion />
      <Testimonials />
      <Insights />
    </>
  );
}
