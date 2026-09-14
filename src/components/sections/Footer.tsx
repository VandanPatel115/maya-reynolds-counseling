import Link from "next/link";
import { footer, site } from "@/lib/content";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-ink py-16 text-cream md:py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-4 md:gap-8">
          <div className="md:col-span-1">
            <p className="font-display text-xl">{site.shortName}</p>
            <p className="mt-4 font-body text-[0.88rem] leading-relaxed text-cream/60">
              {footer.blurb}
            </p>
          </div>

          <div>
            <p className="font-body text-[0.7rem] uppercase tracking-[0.2em] text-cream/50">
              {footer.navTitle}
            </p>
            <ul className="mt-5 space-y-3">
              {footer.navLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="font-body text-[0.9rem] text-cream/80 transition-colors hover:text-clay-soft">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-[0.7rem] uppercase tracking-[0.2em] text-cream/50">
              {footer.servicesTitle}
            </p>
            <ul className="mt-5 space-y-3">
              {footer.serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="font-body text-[0.9rem] text-cream/80 transition-colors hover:text-clay-soft">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-[0.7rem] uppercase tracking-[0.2em] text-cream/50">
              {footer.contactTitle}
            </p>
            <p className="mt-5 whitespace-pre-line font-body text-[0.9rem] leading-relaxed text-cream/80">
              {footer.address}
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/15 pt-8">
          <p className="font-body text-[0.82rem] leading-relaxed text-cream/50">
            {footer.areasLabel}
          </p>
          <p className="mt-4 font-body text-[0.8rem] text-cream/40">
            {footer.legal}
          </p>
        </div>
      </Container>
    </footer>
  );
}