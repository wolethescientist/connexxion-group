import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { company, subsidiaries, products } from "@/lib/content";
import { ArrowUpRight, MapPin, Mail, Phone } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-obsidian">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[120%] -translate-x-1/2 rounded-[100%] bg-emerald/10 blur-3xl" />

      <div className="shell relative py-20 md:py-28">
        {/* Big CTA */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-16 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow mb-5">Let&rsquo;s build what&rsquo;s next</p>
            <h2 className="display-2 max-w-2xl text-ghost">
              Ready to recreate <span className="text-grad">Africa's tomorrow</span>, today?
            </h2>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-emerald px-7 py-4 text-base font-medium text-[#04120a] transition-all duration-300 hover:bg-emerald-bright hover:shadow-[0_8px_50px_-8px_rgba(15,166,89,0.7)]"
          >
            Start a conversation
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Columns */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mute">
              A diversified African holding company building the future across
              technology, engineering, energy and beyond.
            </p>
            <div className="mt-7 space-y-3 text-sm text-mute">
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 transition-colors hover:text-ghost">
                <Mail className="h-4 w-4 text-emerald" /> {company.email}
              </a>
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 transition-colors hover:text-ghost">
                <Phone className="h-4 w-4 text-emerald" /> {company.phone}
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald" /> {company.hq}
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Subsidiaries</h3>
            <ul className="mt-5 space-y-2.5">
              {subsidiaries.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/subsidiaries/${s.slug}`} className="text-sm text-mute transition-colors hover:text-emerald">
                    {s.name.replace(" & Solutions", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Products</h3>
            <ul className="mt-5 space-y-2.5">
              {products.slice(0, 6).map((p) => (
                <li key={p.name}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-sm text-mute transition-colors hover:text-emerald">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Group</h3>
            <ul className="mt-5 space-y-2.5">
              {[
                { label: "About", href: "/about" },
                { label: "Subsidiaries", href: "/subsidiaries" },
                { label: "Products", href: "/products" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-mute transition-colors hover:text-emerald">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-faint sm:flex-row">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.2em]">{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
