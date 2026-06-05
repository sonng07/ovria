import type { LucideIcon } from "lucide-react";
import { BadgePercent, Handshake, ReceiptText, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/site/section";
import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";

type CommissionPoint = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const POINTS: CommissionPoint[] = [
  {
    icon: BadgePercent,
    title: "0 % de commission",
    description: "Ni côté ouvrier, ni côté entreprise. Jamais.",
  },
  {
    icon: Handshake,
    title: "Recrutement en direct",
    description: "Pas d’intermédiaire qui prélève une marge sur l’embauche.",
  },
  {
    icon: ReceiptText,
    title: "Un abonnement clair",
    description: "Un forfait mensuel. Aucun coût caché par embauche.",
  },
  {
    icon: ShieldCheck,
    title: "Vous gardez le contrôle",
    description: "L’ouvrier dit oui ou non. Personne ne prend de marge sur votre travail.",
  },
];

export function Commission() {
  return (
    <Section id="commission">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Zéro intermédiaire</Eyebrow>
          <h2 className="t-display-l mt-4 text-ink">
            Sans commission. Pour personne.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          {/* @efferd/features-1 — borderless divider grid, themed onto
              Tide tokens (text-ink / text-ink-2). */}
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 py-4 md:grid-cols-4">
            {POINTS.map((point, index) => (
              <div
                key={point.title}
                className={cn(
                  "relative flex flex-col items-center justify-center p-2",
                  "after:absolute after:inset-y-0 after:right-0 after:h-full after:w-px after:bg-linear-to-b after:from-foreground/6 after:via-foreground/25 after:to-foreground/6",
                  "[&_svg]:size-6 [&_svg]:text-muted-foreground",
                  {
                    "after:hidden": index === POINTS.length - 1,
                    "after:hidden after:md:block": index === 1,
                  }
                )}
              >
                <point.icon strokeWidth={1.75} />
                <h3 className="mt-4 text-center text-xs font-medium text-ink md:text-sm lg:text-base">
                  {point.title}
                </h3>
                <p className="mt-1 text-center text-[10px] text-ink-2 md:text-xs">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
