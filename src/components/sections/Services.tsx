import Image from "next/image";
import { services } from "@/lib/content";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Services() {
  return (
    <Section id="services" className="bg-shell">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{services.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-[2rem] leading-[1.15] md:text-[2.5rem]">
            {services.heading}
          </h2>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {services.items.map((item) => (
            <article key={item.id} id={item.id} className="scroll-mt-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] bg-sage-soft">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-7 text-[1.35rem] leading-snug md:min-h-[3.8rem]">{item.title}</h3>
              <p className="mt-3 font-body text-[0.95rem] leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}