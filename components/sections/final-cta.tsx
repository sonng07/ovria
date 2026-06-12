import { Section } from "@/components/site/section";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { AppBadges } from "@/components/site/app-badges";

export function FinalCta() {
  return (
    <Section id="telecharger" className="py-[clamp(40px,7vw,80px)]">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(246,242,236,0.14),transparent)]" />
            <div className="relative">
              <h2 className="t-display-l mx-auto max-w-2xl text-primary-foreground">
                Les bons profils, les bonnes entreprises, sans intermédiaire.
              </h2>
              <p className="t-lead mx-auto mt-4 max-w-xl text-primary-foreground/75">
                Téléchargez OVRIA. Gratuit pour les travailleurs, sans commission pour les
                entreprises.
              </p>
              <div className="mt-9 flex justify-center">
                <AppBadges onDark />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
