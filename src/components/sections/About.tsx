import Image from "next/image";
import { about } from "@/lib/content";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Em from "@/components/ui/Em";

export default function About() {
  return (
    <Section id="about" className="scroll-mt-24 bg-cream">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] bg-sage-soft">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h2 className="mt-5 text-[2rem] leading-[1.15] md:text-[2.5rem]">
              {about.headingStart} <Em>{about.headingEm}</Em>
            </h2>
            <div className="mt-7 space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="font-body text-[1rem] leading-relaxed text-ink-muted">
                  {p}
                </p>
              ))}
            </div>
            <Button href={about.cta.href} variant="outline" className="mt-9">
              {about.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}