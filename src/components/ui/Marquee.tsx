import { partners } from "@/lib/content";

export function PartnerMarquee() {
  const row = [...partners, ...partners];
  return (
    <div className="relative flex overflow-hidden border-y border-white/10 py-7">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex shrink-0 items-center gap-16 pr-16 [animation:var(--animate-marquee)]">
        {row.map((p, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-display text-2xl text-mute/70 transition-colors hover:text-ghost md:text-3xl"
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}
