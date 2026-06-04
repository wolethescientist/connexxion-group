import { leadership } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";

export function Leadership({ heading = true }: { heading?: boolean }) {
  return (
    <section className="py-24 md:py-32">
      <div className="shell">
        {heading && (
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-5">[ 05 ] Leadership</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2 text-ghost">
                The people behind <span className="text-grad">the group.</span>
              </h2>
            </Reveal>
          </div>
        )}

        <Stagger className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {leadership.map((m) => (
            <StaggerItem key={m.name}>
              <figure className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-60" />
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} on LinkedIn`}
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-ink/40 text-ghost opacity-0 backdrop-blur transition-all duration-300 hover:bg-emerald hover:text-[#04120a] group-hover:opacity-100"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <figcaption className="mt-4">
                  <p className="font-display text-lg text-ghost">{m.name}</p>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-emerald/80">
                    {m.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{m.bio}</p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
