import { leadership, Leader } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";

export function Leadership({ heading = true }: { heading?: boolean }) {
  // Group team by level
  const tier1 = leadership.filter((m) => m.level === 1);
  const tier2 = leadership.filter((m) => m.level === 2);
  const tier3 = leadership.filter((m) => m.level === 3);
  const tier4 = leadership.filter((m) => m.level === 4);

  // Helper to render a card matching the provided screenshot
  const Card = ({ member }: { member: Leader }) => {
    return (
      <div className="group relative w-full max-w-[240px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[1.02] hover:border-emerald/40 hover:shadow-[0_0_20px_rgba(15,166,89,0.15)]">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="absolute right-3 top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-ink/50 text-mute transition-all duration-300 hover:border-emerald hover:bg-emerald hover:text-ink"
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}

        {/* Top portion: Image filling the top and side borders */}
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-103"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06120a] via-transparent to-transparent opacity-30" />
        </div>

        {/* Bottom portion: Solid dark green container with Golden Name and Emerald Role */}
        <div className="bg-[#06120a] p-4 pt-5 pb-5 text-center border-t border-white/5">
          <h4 className="font-display text-sm font-semibold tracking-tight text-[#d9a74a]">
            {member.name}
          </h4>
          <span className="mt-2 block font-mono text-[0.62rem] font-bold uppercase tracking-widest text-[#0fa659]">
            {member.role}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="shell">
        {heading && (
          <div className="mb-16 max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-5">[ 05 ] Structure</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2 text-ghost">
                Our organogram <span className="text-grad">hierarchy.</span>
              </h2>
            </Reveal>
          </div>
        )}

        {/* ======================================================== */}
        {/* DESKTOP LAYOUT (Tree Diagram)                            */}
        {/* ======================================================== */}
        <div className="hidden lg:flex flex-col items-center space-y-0 w-full select-none">
          {/* Tier 1: GCEO */}
          <div className="relative flex flex-col items-center w-full">
            {tier1.map((m) => (
              <Card key={m.name} member={m} />
            ))}
            {/* Line from GCEO to Tier 2 horizontal line */}
            <div className="w-[2px] h-8 bg-emerald/30" />
          </div>

          {/* Tier 2: Executives */}
          <div className="relative w-full flex flex-col items-center">
            {/* Horizontal line for Tier 2 */}
            <div className="absolute top-0 left-[12.5%] right-[12.5%] h-[2px] bg-emerald/30" />

            <div className="grid grid-cols-4 gap-6 w-full pt-8 relative">
              {tier2.map((m) => {
                return (
                  <div key={m.name} className="relative flex flex-col items-center">
                    {/* Vertical connector line above the card to horizontal line */}
                    <div className="absolute top-0 w-[2px] h-8 -translate-y-full bg-emerald/30" />
                    <Card member={m} />
                  </div>
                );
              })}
            </div>

            {/* Central connector down to Tier 3 */}
            <div className="w-[2px] h-8 bg-emerald/30" />
          </div>

          {/* Tier 3: Functional Directors */}
          <div className="relative w-full flex flex-col items-center">
            {/* Horizontal line for Tier 3 */}
            <div className="absolute top-0 left-[12.5%] right-[12.5%] h-[2px] bg-emerald/30" />

            <div className="grid grid-cols-4 gap-6 w-full pt-8 relative">
              {tier3.map((m) => {
                return (
                  <div key={m.name} className="relative flex flex-col items-center">
                    {/* Vertical connector line above the card to horizontal line */}
                    <div className="absolute top-0 w-[2px] h-8 -translate-y-full bg-emerald/30" />
                    <Card member={m} />
                  </div>
                );
              })}
            </div>

            {/* Central connector down to Tier 4 */}
            <div className="w-[2px] h-8 bg-emerald/30" />
          </div>

          {/* Tier 4: Operations Managers */}
          <div className="relative w-full flex flex-col items-center">
            {/* Horizontal line for Tier 4 (2 cards) */}
            <div className="absolute top-0 left-[25%] right-[25%] h-[2px] bg-emerald/30 max-w-2xl mx-auto w-[50%]" />

            <div className="grid grid-cols-2 gap-12 max-w-2xl mx-auto w-full pt-8 relative">
              {tier4.map((m) => {
                return (
                  <div key={m.name} className="relative flex flex-col items-center">
                    {/* Vertical connector line above the card to horizontal line */}
                    <div className="absolute top-0 w-[2px] h-8 -translate-y-full bg-emerald/30" />
                    <Card member={m} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MOBILE LAYOUT (Vertical Hierarchical Timeline)           */}
        {/* ======================================================== */}
        <div className="lg:hidden space-y-12 relative pl-6 border-l-2 border-white/5 ml-3 select-none">
          {/* Tier 1 */}
          <div className="relative space-y-4">
            <div className="absolute -left-[31px] top-2 h-4 w-4 rounded-full border-2 border-emerald bg-ink flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald" />
            </div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-emerald">
              Group CEO & GMD
            </h3>
            <div className="space-y-4">
              {tier1.map((m) => (
                <Card key={m.name} member={m} />
              ))}
            </div>
          </div>

          {/* Tier 2 */}
          <div className="relative space-y-4">
            <div className="absolute -left-[31px] top-2 h-4 w-4 rounded-full border-2 border-emerald bg-ink flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald" />
            </div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-emerald">
              Executive Board
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {tier2.map((m) => (
                <Card key={m.name} member={m} />
              ))}
            </div>
          </div>

          {/* Tier 3 */}
          <div className="relative space-y-4">
            <div className="absolute -left-[31px] top-2 h-4 w-4 rounded-full border-2 border-emerald bg-ink flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald" />
            </div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-emerald">
              Functional Directors
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {tier3.map((m) => (
                <Card key={m.name} member={m} />
              ))}
            </div>
          </div>

          {/* Tier 4 */}
          <div className="relative space-y-4">
            <div className="absolute -left-[31px] top-2 h-4 w-4 rounded-full border-2 border-emerald bg-ink flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald" />
            </div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-emerald">
              Operations & Management
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {tier4.map((m) => (
                <Card key={m.name} member={m} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
