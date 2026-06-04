"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { subsidiaries } from "@/lib/content";
import { ArrowRight } from "@/components/ui/Icons";

const interests = ["General enquiry", ...subsidiaries.map((s) => s.sector), "Partnership", "Careers"];
const uniqueInterests = Array.from(new Set(interests));

export function ContactForm() {
  const role = useSearchParams().get("role");
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");
  // Pre-fill when arriving from a careers role link (?role=…)
  const [interest, setInterest] = useState(role ? "Careers" : "General enquiry");
  const [message, setMessage] = useState(
    role ? `I'd like to apply for the ${role} role.\n\n` : ""
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // No backend wired — simulate a successful submission.
    setTimeout(() => setStatus("sent"), 1100);
  };

  const field =
    "w-full rounded-xl border border-white/12 bg-white/[0.02] px-4 py-3.5 text-ghost placeholder:text-faint outline-none transition-colors duration-200 focus:border-emerald/70 focus:bg-white/[0.04]";
  const label = "mb-2 block font-mono text-xs uppercase tracking-[0.16em] text-mute";

  if (status === "sent") {
    return (
      <div className="flex h-full min-h-[24rem] flex-col items-center justify-center rounded-2xl border border-emerald/30 bg-emerald/[0.06] p-10 text-center">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-[#04120a]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-ghost">Message received.</h3>
        <p className="mt-2 max-w-sm text-mute">
          Thank you for reaching out to Connexxion Group. A member of our team
          will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-obsidian p-7 md:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Full name</label>
          <input id="name" name="name" required placeholder="Your name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" name="email" type="email" required placeholder="you@company.com" className={field} />
        </div>
        <div>
          <label htmlFor="company" className={label}>Company</label>
          <input id="company" name="company" placeholder="Organisation" className={field} />
        </div>
        <div>
          <label htmlFor="interest" className={label}>Interest</label>
          <select
            id="interest"
            name="interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className={`${field} cursor-pointer appearance-none`}
          >
            {uniqueInterests.map((o) => (
              <option key={o} value={o} className="bg-obsidian">{o}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className={label}>Message</label>
        <textarea id="message" name="message" required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your project…" className={`${field} resize-none`} />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-emerald px-7 py-3.5 text-sm font-medium text-[#04120a] transition-all duration-300 hover:bg-emerald-bright hover:shadow-[0_8px_44px_-8px_rgba(15,166,89,0.7)] disabled:cursor-wait disabled:opacity-70"
      >
        {status === "loading" ? "Sending…" : "Send message"}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
