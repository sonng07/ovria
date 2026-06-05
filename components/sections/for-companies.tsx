import { Section } from "@/components/site/section";
import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { CtaLink } from "@/components/site/cta";
import { PhoneFrame } from "@/components/site/phone-frame";

/* The company's journey, told in three screens — mirrors ForWorkers:
   filter to the exact profile the site needs, message the worker
   directly, then track every sent message (who accepts, who refuses).
   Each card shows the real app screen, which slides up on hover to
   reveal more of the screen without ever touching the copy. */
const STEPS = [
  {
    step: "01",
    src: "/screens/entreprises-recherche.png",
    alt: "Écran Filtres d’OVRIA — recherche d’ouvriers par métier, zone, niveau d’expérience et type de contrat",
    title: "Filtrez jusqu’au bon profil",
    body: "Métier, zone, niveau, contrat. Ne voyez que les profils faits pour votre chantier.",
  },
  {
    step: "02",
    src: "/screens/entreprises-contact.png",
    alt: "Écran de message OVRIA — contacter un ouvrier directement en un message",
    title: "Contactez en direct",
    body: "Écrivez à l’ouvrier qui vous intéresse. Sans agence, sans intermédiaire.",
  },
  {
    step: "03",
    src: "/screens/entreprises-suivi.png",
    alt: "Écran Messages d’OVRIA — suivi des messages envoyés et de leur statut « En attente de réponse »",
    title: "Suivez vos échanges",
    body: "Chaque message et son statut au même endroit. L’ouvrier accepte ou refuse — vous êtes notifié.",
  },
];

export function ForCompanies() {
  return (
    <Section id="entreprises">
      <Container>
        {/* Centered header — mirrors the ForWorkers block */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <Eyebrow>Pour les entreprises</Eyebrow>
            <span className="rounded-pill bg-primary/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
              Sans commission
            </span>
          </div>
          <h2 className="t-display-l mt-4 text-ink">
            Recrutez en direct. Sans commission.
          </h2>
          <p className="t-lead mx-auto mt-5 max-w-xl text-ink-2">
            Trouvez des ouvriers qualifiés et disponibles près de vos chantiers,
            contactez-les directement, et suivez chaque échange. Un abonnement
            mensuel, et c’est tout.
          </p>
        </Reveal>

        {/* Three-screen journey grid */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 90} className="flex">
              <div className="group card-tide relative mx-auto flex h-[600px] w-full max-w-sm flex-col overflow-hidden lg:max-w-none">
                {/* TEXT ZONE — fixed height so the phone never collides with it */}
                <div className="relative z-10 h-[200px] shrink-0 px-7 pt-7">
                  <span className="grid size-9 place-items-center rounded-full border border-secondary/15 bg-secondary/10 text-[13px] font-bold text-secondary">
                    {s.step}
                  </span>
                  <h3 className="mt-5 text-lg font-bold tracking-[-0.015em] text-ink">
                    {s.title}
                  </h3>
                  <p className="t-body-sm mt-2 text-ink-2">{s.body}</p>
                </div>

                {/* PHONE ZONE — own clip window (top edge under the text), so
                    the screen can slide up to reveal more content on hover
                    without the device top ever touching the copy. */}
                <div className="relative grow overflow-hidden">
                  <PhoneFrame
                    src={s.src}
                    alt={s.alt}
                    className="absolute left-1/2 top-10 w-[272px] -translate-x-1/2 transition-[translate,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [will-change:translate] group-hover:-translate-y-10 group-hover:shadow-[0_46px_84px_-30px_rgba(26,26,23,0.62)]"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Account / pricing CTA */}
        <Reveal delay={120} className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <CtaLink href="#tarifs" variant="primary">
            Créer un compte entreprise
          </CtaLink>
          <CtaLink href="#tarifs" variant="ghost">
            Voir les tarifs
          </CtaLink>
        </Reveal>
      </Container>
    </Section>
  );
}
