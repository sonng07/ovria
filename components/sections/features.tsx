import { BadgeCheck, Hand, MessageCircle, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/site/section";
import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";

const FEATURES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: BadgeCheck,
    title: "Double badge dispo + fraîcheur",
    body: "Vous voyez d’un coup d’œil qui est disponible — et si le profil est à jour. Fini les profils fantômes.",
  },
  {
    icon: Hand,
    title: "Signal d’intérêt",
    body: "L’ouvrier se manifeste en un geste, sans spammer. L’entreprise reçoit une alerte. Discret, anti-spam.",
  },
  {
    icon: MessageCircle,
    title: "Messagerie directe",
    body: "Échangez directement, sans intermédiaire. L’ouvrier accepte ou décline. Tout est clair.",
  },
  {
    icon: ShieldCheck,
    title: "Vos données protégées",
    body: "Vos informations restent les vôtres. Hébergement en conformité RGPD.",
  },
];

export function Features() {
  return (
    <Section>
      <Container>
        <Reveal className="measure">
          <Eyebrow>Ce qui change tout</Eyebrow>
          <h2 className="t-display-l mt-4 text-ink">Pensé pour le terrain.</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <div className="card-tide h-full p-7">
                <span className="grid size-12 place-items-center rounded-2xl border border-hairline bg-surface text-ink">
                  <f.icon className="size-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-[-0.015em] text-ink">
                  {f.title}
                </h3>
                <p className="t-body-sm mt-2 text-ink-2">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
