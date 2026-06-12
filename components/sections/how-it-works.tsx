import { MessageCircle, Search, UserPlus } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/site/section";
import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";

const STEPS: {
  num: string;
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    num: "01",
    icon: UserPlus,
    title: "Créez votre profil",
    body: "Travailleur : votre métier, votre niveau, votre zone, vos disponibilités. En 2 minutes. Gratuit.",
  },
  {
    num: "02",
    icon: Search,
    title: "Soyez trouvé, trouvez",
    body: "Entreprise : cherchez par métier, zone et disponibilité. Voyez qui est vraiment dispo, aujourd’hui.",
  },
  {
    num: "03",
    icon: MessageCircle,
    title: "Parlez en direct",
    body: "Un message, une réponse. Vous vous mettez d’accord. Sans personne entre vous.",
  },
];

export function HowItWorks() {
  return (
    <Section>
      <Container>
        <Reveal className="measure">
          <Eyebrow>Comment ça marche</Eyebrow>
          <h2 className="t-display-l mt-4 text-ink">Simple des deux côtés.</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 80}>
              <div className="card-tide h-full p-7">
                <div className="flex items-center justify-between">
                  <span className="text-[2.5rem] font-bold tracking-[-0.03em] text-ink/15">
                    {step.num}
                  </span>
                  <span className="grid size-11 place-items-center rounded-full border border-hairline bg-surface text-ink">
                    <step.icon className="size-5" strokeWidth={1.75} />
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-[-0.015em] text-ink">
                  {step.title}
                </h3>
                <p className="t-body-sm mt-2 text-ink-2">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
