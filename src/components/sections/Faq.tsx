import { faq } from "@/lib/content";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Faq() {
  return (
    <Section id="faq" className="scroll-mt-24 bg-cream">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-[2rem] leading-[1.15] md:text-[2.5rem]">
            {faq.heading}
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-2xl">
          {faq.items.map((item) => (
            <details
              key={item.q}
              open={false}
              className="group border-b border-sand py-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-[1.2rem] text-ink marker:hidden">
                {item.q}
                <span className="shrink-0 text-clay transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-xl font-body text-[0.98rem] leading-relaxed text-ink-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}