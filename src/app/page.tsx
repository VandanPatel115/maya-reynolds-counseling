import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Em from "@/components/ui/Em";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main>
      <Section>
        <Container>
          <Eyebrow>Santa Monica, California</Eyebrow>
          <h1 className="mt-6 max-w-3xl text-5xl leading-[1.1] md:text-6xl">
            Therapy for people who look fine and feel <Em>exhausted</Em>
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg text-ink-muted">
            Token and typography smoke test.
          </p>
          <div className="mt-10 flex gap-4">
            <Button href="#">Book a consultation</Button>
            <Button href="#" variant="outline">Learn more</Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
