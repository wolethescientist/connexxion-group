import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { company } from "@/lib/content";
import { MapPin, Mail, Phone, Clock, Globe } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Connexxion Group — ${company.hq}. ${company.email} · ${company.phone}`,
};

export default function ContactPage() {
  const details = [
    { icon: MapPin, label: "Head office", value: company.hq },
    { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
    { icon: Phone, label: "Phone", value: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}` },
    { icon: Clock, label: "Hours", value: company.hours },
    { icon: Globe, label: "Presence", value: company.countries.join(" · ") },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s build what&rsquo;s <span className="text-grad">next.</span>
          </>
        }
        intro="Whether you're a client, a partner or future talent — tell us where you're headed and we'll help you get there."
      />

      <section className="pb-24 md:pb-32">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Details */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="space-y-7">
                {details.map((d) => {
                  const Icon = d.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-obsidian text-emerald">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.16em] text-faint">{d.label}</p>
                        <p className="mt-1 text-lg text-ghost">{d.value}</p>
                      </div>
                    </div>
                  );
                  return d.href ? (
                    <a key={d.label} href={d.href} className="block transition-opacity hover:opacity-80">
                      {content}
                    </a>
                  ) : (
                    <div key={d.label}>{content}</div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="Connexxion Group head office"
                  src="https://www.google.com/maps?q=Maitama,Abuja,Nigeria&output=embed"
                  className="h-64 w-full grayscale-[0.4] invert-[0.92] hue-rotate-180"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
