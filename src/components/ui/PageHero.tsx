import { NodeField } from "./NodeField";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-16 md:pt-52 md:pb-24">
      <NodeField className="pointer-events-none absolute -right-1/4 -top-1/4 h-[140%] w-[80%] opacity-[0.18]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald/10 blur-[120px]" />
      <div className="shell relative">
        <Reveal>
          <p className="eyebrow mb-6">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="display-1 max-w-5xl text-ghost">{title}</h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mute">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
