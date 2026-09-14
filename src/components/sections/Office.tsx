import Image from "next/image";
import { office } from "@/lib/content";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Em from "@/components/ui/Em";

export default function Office() {
  return (
    <Section id="office" className="scroll-mt-24 bg-shell">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{office.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-[2rem] leading-[1.15] md:text-[2.5rem]">
            {office.headingStart} <Em>{office.headingEm}</Em>
          </h2>
          <div className="mt-7 space-y-5">
            {office.paragraphs.map((p, i) => (
              <p key={i} className="font-body text-[1rem] leading-relaxed text-ink-muted">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {office.images.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sage-soft"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}