import { Check } from "lucide-react";
import { Section } from "@/components/site/section";
import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { AppBadges } from "@/components/site/app-badges";
import { CtaLink } from "@/components/site/cta";
import { Separator } from "@/components/ui/separator";

function Included({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-3 text-ink-2">
          <Check className="mt-0.5 size-4 flex-none text-ok" strokeWidth={2.5} />
          <span className="t-body-sm">{i}</span>
        </li>
      ))}
    </ul>
  );
}

export function Pricing() {
  return (
    <Section id="tarifs">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Tarifs</Eyebrow>
          <h2 className="t-display-l mt-4 text-ink">
            Gratuit pour les ouvriers. Un forfait simple pour les entreprises.
          </h2>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
          {/* Worker — free, forever */}
          <Reveal>
            <div className="card-tide flex h-full flex-col p-8">
              <div className="flex items-center gap-3">
                <span className="t-eyebrow text-muted-foreground">Ouvrier</span>
                <span className="rounded-pill bg-ok/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-ok">
                  Gratuit
                </span>
              </div>
              <h3 className="t-display-m mt-4 text-ink">C’est gratuit. Pour toujours.</h3>
              <p className="t-body mt-3 text-ink-2">
                Créez votre profil, soyez visible, recevez des messages. Sans payer,
                jamais.
              </p>
              <Separator className="my-6 bg-hairline" />
              <Included
                items={[
                  "Profil professionnel complet",
                  "Visible par les entreprises de votre zone",
                  "Messages directs illimités",
                  "Vous gardez le contrôle : oui ou non",
                ]}
              />
              <div className="mt-8 pt-2">
                <AppBadges />
              </div>
            </div>
          </Reveal>

          {/* Company — flat monthly subscription (price not finalized) */}
          <Reveal delay={100}>
            <div className="card-tide flex h-full flex-col border-ink/15 p-8 shadow-[0_34px_70px_-44px_rgba(26,26,23,0.55)]">
              <span className="t-eyebrow text-muted-foreground">Entreprise</span>
              <div className="mt-4 flex items-end gap-2">
                {/* TODO: the monthly price is not finalized in the product docs.
                    Replace "Sur demande" with e.g. "49 € / mois" ONLY once confirmed.
                    Do not invent a number. */}
                <span className="t-display-m text-ink">Sur demande</span>
              </div>
              <p className="t-caption mt-2 text-muted-foreground">
                Sans engagement · Résiliable à tout moment
              </p>
              <Separator className="my-6 bg-hairline" />
              <Included
                items={[
                  "Recherche illimitée par métier, zone et disponibilité",
                  "Filtres et profils sauvegardés",
                  "Messagerie directe illimitée",
                  "Facture pro (SIRET, TVA)",
                ]}
              />
              <div className="mt-8 pt-2">
                <CtaLink href="#contact" variant="primary" className="w-full">
                  Nous contacter
                </CtaLink>
                <p className="t-caption mt-3 text-center text-muted-foreground">
                  Tarif communiqué sur demande, le temps de finaliser le lancement.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
