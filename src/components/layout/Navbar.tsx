"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { nav, subsidiaries, products, type NavLink } from "@/lib/content";
import { ArrowUpRight, ChevronDown } from "@/components/ui/Icons";

const cleanName = (n: string) => n.replace(" & Solutions", "");

type DropItem = { label: string; sublabel: string; href: string; external?: boolean };
type DropConfig = { items: DropItem[]; allLabel: string; allHref: string };

const DROPDOWNS: Record<string, DropConfig> = {
  "/subsidiaries": {
    items: subsidiaries.map((s) => ({
      label: cleanName(s.name),
      sublabel: s.sector,
      href: `/subsidiaries/${s.slug}`,
    })),
    allLabel: "View all subsidiaries",
    allHref: "/subsidiaries",
  },
  "/products": {
    items: products.map((p) => ({
      label: p.name,
      sublabel: p.category,
      href: p.url,
      external: true,
    })),
    allLabel: "View all products",
    allHref: "/products",
  },
};

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => {
    setOpen(false);
    setMobileSub(null);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="shell">
        <nav
          className={`mt-3 flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 md:mt-4 md:px-6 ${
            scrolled
              ? "border border-white/10 bg-ink/70 backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          }`}
        >
          <Logo />

          <div className="hidden items-center gap-1 lg:flex">
            {nav.map((l) => {
              const active =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              if (DROPDOWNS[l.href])
                return (
                  <NavDropdown
                    key={l.href}
                    item={l}
                    active={active}
                    config={DROPDOWNS[l.href]}
                  />
                );
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                    active ? "text-ghost" : "text-mute hover:text-ghost"
                  }`}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-full bg-emerald px-5 py-2.5 text-sm font-medium text-[#04120a] transition-all duration-300 hover:bg-emerald-bright sm:inline-flex"
            >
              Get a quote
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 lg:hidden"
            >
              <div className="flex flex-col gap-[5px]">
                <span
                  className={`block h-[1.5px] w-4 bg-ghost transition-transform duration-300 ${
                    open ? "translate-y-[6.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-4 bg-ghost transition-opacity duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-4 bg-ghost transition-transform duration-300 ${
                    open ? "-translate-y-[6.5px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="shell lg:hidden"
          >
            <div className="mt-2 overflow-hidden rounded-3xl border border-white/10 bg-obsidian/95 p-3 backdrop-blur-xl">
              {nav.map((l) => {
                const config = DROPDOWNS[l.href];
                if (config) {
                  const expanded = mobileSub === l.href;
                  return (
                    <div key={l.href}>
                      <button
                        onClick={() =>
                          setMobileSub((s) => (s === l.href ? null : l.href))
                        }
                        aria-expanded={expanded}
                        className="flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-lg text-ghost transition-colors hover:bg-white/5"
                      >
                        {l.label}
                        <ChevronDown
                          className={`h-5 w-5 text-emerald transition-transform duration-300 ${
                            expanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {expanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="my-1 ml-4 border-l border-white/10 pl-3">
                              <Link
                                href={config.allHref}
                                onClick={closeMobile}
                                className="block rounded-xl px-4 py-2.5 text-sm text-mute transition-colors hover:text-emerald"
                              >
                                {config.allLabel}
                              </Link>
                              {config.items.map((it) =>
                                it.external ? (
                                  <a
                                    key={it.label}
                                    href={it.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={closeMobile}
                                    className="block rounded-xl px-4 py-2.5 text-sm text-mute transition-colors hover:text-emerald"
                                  >
                                    {it.label}
                                  </a>
                                ) : (
                                  <Link
                                    key={it.label}
                                    href={it.href}
                                    onClick={closeMobile}
                                    className="block rounded-xl px-4 py-2.5 text-sm text-mute transition-colors hover:text-emerald"
                                  >
                                    {it.label}
                                  </Link>
                                )
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={closeMobile}
                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg text-ghost transition-colors hover:bg-white/5"
                  >
                    {l.label}
                    <ArrowUpRight className="h-4 w-4 text-emerald" />
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={closeMobile}
                className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-emerald px-4 py-3.5 font-medium text-[#04120a]"
              >
                Get a quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* Desktop nav item with a hover/focus dropdown */
function NavDropdown({
  item,
  active,
  config,
}: {
  item: NavLink;
  active: boolean;
  config: DropConfig;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        aria-haspopup="menu"
        aria-expanded={open}
        onFocus={() => setOpen(true)}
        className={`relative flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
          active ? "text-ghost" : "text-mute hover:text-ghost"
        }`}
      >
        {item.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
        {active && (
          <motion.span
            layoutId="nav-dot"
            className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald"
          />
        )}
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            role="menu"
            className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3"
          >
            <div className="w-[min(34rem,calc(100vw-3rem))] rounded-2xl border border-white/10 bg-obsidian/95 p-2 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-0.5">
                {config.items.map((it) => {
                  const inner = (
                    <>
                      <span className="text-sm text-ghost transition-colors duration-200 group-hover:text-emerald">
                        {it.label}
                      </span>
                      {/* <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-faint">
                        {it.sublabel}
                      </span> */}
                    </>
                  );
                  const cls =
                    "group flex flex-col gap-0.5 rounded-xl px-3.5 py-2.5 transition-colors duration-200 hover:bg-white/5";
                  return it.external ? (
                    <a
                      key={it.label}
                      href={it.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      role="menuitem"
                      className={cls}
                    >
                      {inner}
                    </a>
                  ) : (
                    <Link key={it.label} href={it.href} role="menuitem" className={cls}>
                      {inner}
                    </Link>
                  );
                })}
              </div>
              <Link
                href={config.allHref}
                role="menuitem"
                className="mt-1 flex items-center justify-between rounded-xl border-t border-white/5 px-3.5 py-3 text-sm text-mute transition-colors duration-200 hover:text-ghost"
              >
                {config.allLabel}
                <ArrowUpRight className="h-4 w-4 text-emerald" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
