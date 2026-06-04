import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/lib/content";

export function Manifesto() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="eyebrow">[ 01 ] The Group</p>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="font-display text-3xl leading-[1.25] tracking-[-0.02em] text-ghost md:text-[2.7rem] md:leading-[1.22]">
                A team of driven, innovative and result-oriented specialists —{" "}
                <span className="text-faint">
                  with the passion and skill to proffer bespoke solutions across
                  technology, engineering, energy and beyond.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-12 max-w-xl text-lg leading-relaxed text-mute">
                {company.diversified} From the rails of finance to the fields of
                agriculture, from subsea fabrication to the classroom, Connexxion
                operates as one group with many futures.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
