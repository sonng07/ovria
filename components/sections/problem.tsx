import { Section } from "@/components/site/section";
import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

const STATS: { value: string; label: string; good?: boolean }[] = [
  { value: "18–25 %", label: "prélevé au passage" },
  { value: "800–2 500 €", label: "par embauche" },
  { value: "0 €", label: "avec OVRIA", good: true },
];

export function Problem() {
  return (
    <Section>
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Le problème</Eyebrow>
          <h2 className="t-display-l mt-4 text-ink">
            <em className="underline decoration-[3px] underline-offset-4">Entre</em> vous et le travail, il y a toujours{" "}
            <em className="underline decoration-[3px] underline-offset-4">quelqu’un</em> qui prend sa part.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mx-auto mt-6 max-w-xl text-center">
          <p className="t-body text-ink-2">
            Les agences d’intérim prélèvent 18 à 25 % au passage. Les ouvriers
            postulent « dans le vide » et n’ont jamais de retour. Les entreprises
            paient 800 à 2 500 € de commission pour une seule embauche — et trient
            des CV qui ne disent rien.
          </p>
          <p className="t-body mt-4 font-semibold text-ink">
            Personne n’y gagne, sauf l’intermédiaire.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "relative flex flex-col items-center px-2 text-center",
                  "sm:after:absolute sm:after:inset-y-1 sm:after:right-0 sm:after:w-px sm:after:bg-linear-to-b sm:after:from-transparent sm:after:via-hairline sm:after:to-transparent",
                  i === STATS.length - 1 && "sm:after:hidden",
                )}
              >
                <span
                  className={cn(
                    "t-display-m tabular-nums",
                    stat.good ? "text-ok" : "text-ink",
                  )}
                >
                  {stat.value}
                </span>
                <span className="t-caption mt-1 text-ink-2">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
