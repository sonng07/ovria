import { Section } from "@/components/site/section";
import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { AppBadges } from "@/components/site/app-badges";
import { PhoneFrame } from "@/components/site/phone-frame";

/* The worker's journey, told in three screens: discover the companies
   hiring nearby, signal your interest, and let them reach out first.
   Each card keeps the copy in a fixed top zone; the real app screen peeks
   up from the bottom (clipped) and pops up on hover. */
const STEPS = [
  {
    step: "01",
    src: "/screens/ouvriers-recherche.png",
    alt: "Écran Recherche d’OVRIA — la liste des entreprises du bâtiment qui recrutent à proximité",
    title: "Qui recrute, près de chez vous",
    body: "Voyez en temps réel les entreprises qui cherchent votre métier autour de vous.",
  },
  {
    step: "02",
    src: "/screens/ouvriers-signal.png",
    alt: "Fiche entreprise sur OVRIA — votre métier correspond, bouton Envoyer un signal d’intérêt",
    title: "Un signal d’intérêt, sans spam",
    body: "Votre métier correspond ? Manifestez-vous en un seul geste, 5 fois par jour max.",
  },
  {
    step: "03",
    src: "/screens/ouvriers-confirmation.png",
    alt: "Écran de confirmation OVRIA — Intérêt envoyé, l’entreprise vous contactera",
    title: "Elles vous écrivent en premier",
    body: "L’entreprise voit votre profil et vous contacte. Vous gardez la main.",
  },
];

export function ForWorkers() {
  return (
    <Section id="ouvriers">
      <Container>
        {/* Centered header — matches the reference's "Key Benefits" block */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <Eyebrow>Pour les travailleurs</Eyebrow>
            <span className="rounded-pill bg-ok/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-ok">
              Gratuit
            </span>
          </div>
          <h2 className="t-display-l mt-4 text-ink">
            Vous faites le travail. À vous d’être trouvé.
          </h2>
          <p className="t-lead mx-auto mt-5 max-w-xl text-ink-2">
            Créez votre profil professionnel, trouvez les entreprises qui
            recrutent près de chez vous, manifestez votre intérêt, et
            laissez-les vous contacter. Gratuit, sans spam.
          </p>
        </Reveal>

        {/* Three-screen journey grid */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 90} className="flex">
              <div className="group card-tide relative flex h-[600px] w-full flex-col overflow-hidden mx-auto max-w-sm lg:max-w-none">
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

        {/* Download CTA */}
        <Reveal delay={120} className="mt-12 flex flex-col items-center">
          <AppBadges />
          <p className="t-caption mt-3 text-muted-foreground">
            Télécharger l’app — c’est gratuit
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
