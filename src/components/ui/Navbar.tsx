"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { nav, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import Container from "./Container";
import Button from "./Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFolder, setOpenFolder] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-cream/95 py-3 shadow-sm backdrop-blur-sm" : "bg-transparent py-6"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-tight text-ink">
          {site.shortName}
          <span className="ml-1.5 font-body text-[0.6rem] uppercase tracking-[0.2em] text-ink-faint">
            PsyD
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.links.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setOpenFolder(link.label)}
              onMouseLeave={() => setOpenFolder(null)}
            >
              <Link
                href={link.href}
                className="font-body text-[0.82rem] tracking-wide text-ink transition-colors hover:text-clay"
              >
                {link.label}
              </Link>

              {link.children && openFolder === link.label && (
                <div className="absolute left-1/2 top-full w-60 -translate-x-1/2 pt-4">
                  <div className="rounded-lg border border-sand bg-cream p-2 shadow-lg">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded px-3 py-2.5 font-body text-[0.8rem] text-ink-muted transition-colors hover:bg-shell hover:text-ink"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Button href={nav.cta.href} className="px-6 py-2.5 text-[0.7rem]">
            {nav.cta.label}
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={cn("h-px w-6 bg-ink transition-transform duration-300", mobileOpen && "translate-y-[3.5px] rotate-45")} />
          <span className={cn("h-px w-6 bg-ink transition-transform duration-300", mobileOpen && "-translate-y-[3.5px] -rotate-45")} />
        </button>
      </Container>

      {/* Mobile panel */}
      <div
        className={cn(
          "fixed inset-x-0 top-0 -z-10 h-screen bg-cream px-6 pt-28 transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="flex flex-col gap-1">
          {nav.links.map((link) => (
            <div key={link.label} className="border-b border-sand/70 py-3">
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl text-ink"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="mt-2 flex flex-col gap-1.5 pl-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-body text-sm text-ink-muted"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Button href={nav.cta.href} className="mt-8 w-full">
            {nav.cta.label}
          </Button>
        </nav>
      </div>
    </header>
  );
}