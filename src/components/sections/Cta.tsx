import Image from "next/image";
import { cta } from "@/lib/content";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Em from "@/components/ui/Em";

export default function Cta() {
  return (
    <Section id="contact" className="scroll-mt-24 bg-shell">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>{cta.eyebrow}</Eyebrow>
            <h2 className="mt-5 text-[2rem] leading-[1.15] md:text-[2.5rem]">
              {cta.headingStart} <Em>{cta.headingEm}</Em>
            </h2>
            <p className="mt-6 max-w-md font-body text-[1rem] leading-relaxed text-ink-muted">
              {cta.body}
            </p>
            <Button href={cta.button.href} className="mt-9">
              {cta.button.label}
            </Button>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] bg-sage-soft">
            <Image
              src={cta.image.src}
              alt={cta.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}