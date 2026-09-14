import Image from "next/image";
import { hero } from "@/lib/content";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Em from "@/components/ui/Em";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-36 pb-20 md:pt-44 md:pb-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left image */}
          <div className="lg:col-span-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-sage-soft">
              <Image
                src={hero.imageLeft.src}
                alt={hero.imageLeft.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center lg:col-span-6">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="mx-auto mt-6 max-w-2xl text-[2.6rem] leading-[1.08] md:text-[3.4rem]">
              {hero.headingStart} <Em>{hero.headingEm}</Em> {hero.headingEnd}
            </h1>
            <p className="mx-auto mt-7 max-w-md font-body text-[1.02rem] leading-relaxed text-ink-muted">
              {hero.body}
            </p>
            <Button href={hero.cta.href} className="mt-9">
              {hero.cta.label}
            </Button>
          </div>

          {/* Right image */}
          <div className="lg:col-span-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-sage-soft">
              <Image
                src={hero.imageRight.src}
                alt={hero.imageRight.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}