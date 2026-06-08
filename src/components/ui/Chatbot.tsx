"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { company } from "@/lib/content";

/* ---------------------------------- Icons --------------------------------- */
function ChatIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.9-.9L3 21l1.9-5.6A8.5 8.5 0 0 1 4 11.5 8.38 8.38 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5Z" />
    </svg>
  );
}
function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
function SendIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
    </svg>
  );
}

/* --------------------------------- Types ---------------------------------- */
type ChatLink = { label: string; href: string; external?: boolean };
type Msg = { from: "bot" | "user"; text: string; links?: ChatLink[] };

/* ------------------------------ Reply engine ------------------------------ */
// Front-end only — a lightweight rule-based concierge (no backend wired yet),
// mirroring the simulated contact form.
function getReply(input: string): Msg {
  const q = input.toLowerCase();
  const has = (...k: string[]) => k.some((w) => q.includes(w));

  if (has("career", "job", "hiring", "vacanc", "role", "work", "apply", "recruit"))
    return {
      from: "bot",
      text: "We're hiring across the group — engineering, design, fintech, security and more. Browse open roles on our careers page.",
      links: [
        { label: "View open roles", href: "/careers" },
        { label: "Apply / contact us", href: "/contact" },
      ],
    };

  if (has("product", "software", "platform", "app", "smartrent", "wemoove", "cnx"))
    return {
      from: "bot",
      text: "We build software across PropTech, mobility, HR, retail, education and government — like SmartRent Plus, WeMoove and CNX247.",
      links: [{ label: "Explore products", href: "/products" }],
    };

  if (has("compan", "subsidiar", "sector", "telecom", "energy", "fintech", "agro", "marine", "security", "engineering"))
    return {
      from: "bot",
      text: "Connexxion Group spans telecom & IT, energy, fintech, engineering, agriculture, maritime, security and human capital.",
      links: [{ label: "See our companies", href: "/subsidiaries" }],
    };

  if (has("about", "who", "mission", "vision", "history", "story"))
    return {
      from: "bot",
      text: `Founded in ${company.founded} in Abuja, ${company.name} grew into a diversified African holding company — recreating Africa's tomorrow, today.`,
      links: [{ label: "About the group", href: "/about" }],
    };

  if (has("contact", "reach", "talk", "email", "call", "phone", "quote", "speak"))
    return {
      from: "bot",
      text: `Happy to connect you. Email ${company.email} or call ${company.phone} — or send us a message.`,
      links: [
        { label: "Email us", href: `mailto:${company.email}`, external: true },
        { label: "Contact form", href: "/contact" },
      ],
    };

  if (has("where", "located", "location", "office", "address", "hq", "hours", "open"))
    return {
      from: "bot",
      text: `Our head office is at ${company.hq}. ${company.hours}.`,
      links: [{ label: "Find us", href: "/contact" }],
    };

  if (has("hi", "hello", "hey", "good morning", "good afternoon"))
    return {
      from: "bot",
      text: "Hi there! 👋 I'm the Connexxion assistant. Ask me about our companies, products, careers or how to get in touch.",
    };

  return {
    from: "bot",
    text: "I can help with our companies, products, careers and contact details. For anything specific, our team is one message away.",
    links: [{ label: "Talk to the team", href: "/contact" }],
  };
}

const QUICK = ["Careers", "Our companies", "Products", "Contact us"];

const WELCOME: Msg = {
  from: "bot",
  text: "Hi 👋 Welcome to Connexxion Group. How can I point you in the right direction today?",
};

/* ------------------------------- Component -------------------------------- */
export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to newest message
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  // Focus input + close on Escape
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 350);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      setMessages((m) => [...m, getReply(text)]);
      setTyping(false);
    }, 650);
  };

  return (
    <>
      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-label="Connexxion Group chat assistant"
            className="fixed bottom-24 right-4 z-[60] flex h-[30rem] max-h-[calc(100dvh-7rem)] w-[22rem] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl border border-white/10 bg-obsidian/95 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl md:right-6"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-emerald text-[#04120a]">
                <ChatIcon className="h-5 w-5" />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-obsidian bg-emerald-bright" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-base leading-tight text-ghost">Connexxion Assistant</p>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-emerald">Online now</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="ml-auto flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 text-mute transition-colors duration-200 hover:border-white/25 hover:text-ghost"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-5 py-5">
              {messages.map((m, i) => (
                <Bubble key={i} msg={m} onLink={() => setOpen(false)} />
              ))}
              {typing && (
                <div className="flex w-fit items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.04] px-4 py-3">
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      className="h-1.5 w-1.5 rounded-full bg-mute"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: d * 0.18 }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Quick replies (only before the first user turn) */}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 px-5 pb-3">
                {QUICK.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="cursor-pointer rounded-full border border-white/12 px-3.5 py-1.5 text-xs text-mute transition-colors duration-200 hover:border-emerald/60 hover:text-ghost"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-white/10 p-3"
            >
              <label htmlFor="chat-input" className="sr-only">
                Type your message
              </label>
              <input
                id="chat-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask us anything…"
                autoComplete="off"
                className="min-w-0 flex-1 rounded-full border border-white/12 bg-white/[0.02] px-4 py-2.5 text-sm text-ghost placeholder:text-faint outline-none transition-colors duration-200 focus:border-emerald/70 focus:bg-white/[0.04]"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-emerald text-[#04120a] transition-all duration-200 hover:bg-emerald-bright disabled:cursor-not-allowed disabled:opacity-40"
              >
                <SendIcon className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat assistant"}
        aria-expanded={open}
        className="fixed bottom-5 right-4 z-[60] flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-emerald text-[#04120a] shadow-[0_10px_40px_-8px_rgba(15,166,89,0.7)] transition-all duration-300 hover:bg-emerald-bright hover:shadow-[0_12px_48px_-8px_rgba(15,166,89,0.85)] md:right-6"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <CloseIcon className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChatIcon className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </>
  );
}

/* -------------------------------- Bubble ---------------------------------- */
function Bubble({ msg, onLink }: { msg: Msg; onLink: () => void }) {
  const isBot = msg.from === "bot";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={isBot ? "flex justify-start" : "flex justify-end"}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isBot
            ? "rounded-bl-md border border-white/10 bg-white/[0.04] text-ghost"
            : "rounded-br-md bg-emerald text-[#04120a]"
        }`}
      >
        <p>{msg.text}</p>
        {msg.links && (
          <div className="mt-3 flex flex-col gap-2">
            {msg.links.map((l) =>
              l.external ? (
                <a
                  key={l.label}
                  href={l.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-emerald/40 bg-emerald/[0.08] px-3.5 py-1.5 text-xs font-medium text-emerald-bright transition-colors duration-200 hover:bg-emerald/[0.16]"
                >
                  {l.label}
                  <ArrowMini />
                </a>
              ) : (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={onLink}
                  className="inline-flex items-center gap-1.5 rounded-full border border-emerald/40 bg-emerald/[0.08] px-3.5 py-1.5 text-xs font-medium text-emerald-bright transition-colors duration-200 hover:bg-emerald/[0.16]"
                >
                  {l.label}
                  <ArrowMini />
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function ArrowMini() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}
