import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/site/section";
import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";

/* ------------------------------------------------------------------ *
 *  MOCKUP — privacy policy page for the OVRIA client demo (look & feel).
 *  The content is realistic but illustrative: the legal text should be
 *  reviewed by counsel and the COMPANY details below replaced with
 *  OVRIA's real information before this goes live.
 * ------------------------------------------------------------------ */

const TITLE = "Politique de confidentialité";
const LAST_UPDATED = "5 juin 2026";
const DESCRIPTION =
  "Comment OVRIA collecte, utilise et protège vos données personnelles lorsque vous utilisez notre plateforme de mise en relation directe entre ouvriers du BTP et entreprises.";

export const metadata: Metadata = {
  title: `${TITLE} — OVRIA`,
  description: DESCRIPTION,
  // Mockup with sample data — keep out of search until finalised.
  robots: { index: false, follow: true },
};

/* Sample/mock company details for the demo — replace with OVRIA's real
   legal information before going live. */
const COMPANY = {
  legalName: "OVRIA SAS",
  legalForm: "société par actions simplifiée (SAS)",
  capital: "10 000 €",
  rcs: "Paris",
  siren: "912 345 678",
  address: "12 rue de l’Industrie, 75011 Paris",
  contactEmail: "contact@ovria.fr",
  dpoEmail: "dpo@ovria.fr",
};

type Block =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] };

type PolicySection = {
  id: string;
  heading: string;
  blocks: Block[];
};

const SECTIONS: PolicySection[] = [
  {
    id: "responsable",
    heading: "1. Responsable du traitement",
    blocks: [
      {
        kind: "p",
        text: `Le responsable du traitement des données personnelles collectées via la plateforme OVRIA est ${COMPANY.legalName}, ${COMPANY.legalForm} au capital de ${COMPANY.capital}, immatriculée au RCS de ${COMPANY.rcs} (SIREN ${COMPANY.siren}), dont le siège social est situé ${COMPANY.address}.`,
      },
      {
        kind: "p",
        text: `Pour toute question relative à la présente politique ou à vos données personnelles, vous pouvez nous écrire à ${COMPANY.contactEmail}.`,
      },
    ],
  },
  {
    id: "donnees-collectees",
    heading: "2. Données que nous collectons",
    blocks: [
      {
        kind: "p",
        text: "Nous collectons les données que vous nous fournissez directement lorsque vous créez un compte et utilisez OVRIA, ainsi que des données générées automatiquement par votre utilisation du service :",
      },
      {
        kind: "ul",
        items: [
          "Données d’identification : nom, prénom, adresse e-mail, numéro de téléphone et mot de passe.",
          "Profil professionnel (ouvriers) : métier et spécialité (maçon, coffreur, électricien, etc.), qualifications et certifications, années d’expérience, disponibilité, zone géographique d’intervention et, le cas échéant, photo de profil.",
          "Données des entreprises : raison sociale, numéro SIRET, secteur d’activité, description des chantiers et des besoins de recrutement, coordonnées du contact.",
          "Données de mise en relation : candidatures, offres, messages échangés et mises en relation réalisées via la plateforme.",
          "Données de connexion et d’usage : adresse IP, identifiants de connexion, type d’appareil, système d’exploitation, journaux d’activité et données de navigation.",
          "Données de localisation : zone géographique approximative permettant de proposer des chantiers ou des ouvriers à proximité. La géolocalisation précise n’est utilisée qu’avec votre consentement et peut être désactivée à tout moment.",
        ],
      },
    ],
  },
  {
    id: "finalites",
    heading: "3. Finalités et bases légales",
    blocks: [
      {
        kind: "p",
        text: "Nous traitons vos données pour les finalités suivantes, chacune reposant sur une base légale au sens du RGPD :",
      },
      {
        kind: "ul",
        items: [
          "Créer et gérer votre compte — exécution du contrat (nos conditions générales d’utilisation).",
          "Assurer la mise en relation directe entre ouvriers et entreprises, cœur de notre service — exécution du contrat.",
          "Améliorer, personnaliser et sécuriser la plateforme — intérêt légitime.",
          "Vous adresser des informations relatives au fonctionnement du service (notifications, mises en relation) — exécution du contrat.",
          "Vous envoyer des communications marketing — votre consentement, que vous pouvez retirer à tout moment.",
          "Prévenir et détecter la fraude, les abus et les usages non conformes — intérêt légitime.",
          "Respecter nos obligations légales, comptables et fiscales — obligation légale.",
        ],
      },
    ],
  },
  {
    id: "destinataires",
    heading: "4. Destinataires des données",
    blocks: [
      {
        kind: "p",
        text: "Vos données ne sont accessibles qu’aux personnes qui en ont besoin et ne sont jamais vendues à des tiers :",
      },
      {
        kind: "ul",
        items: [
          "Les autres utilisateurs de la plateforme, dans le strict cadre de la mise en relation : une entreprise peut consulter le profil professionnel d’un ouvrier disponible, et un ouvrier les chantiers proposés par une entreprise.",
          "Nos prestataires techniques (hébergement, envoi d’e-mails et de SMS, mesure d’audience), qui agissent en tant que sous-traitants pour notre compte et selon nos instructions.",
          "Les autorités administratives ou judiciaires, lorsque la loi nous y oblige.",
        ],
      },
      {
        kind: "p",
        text: "OVRIA ne commercialise ni ne loue vos données personnelles à des tiers à des fins publicitaires.",
      },
    ],
  },
  {
    id: "transferts",
    heading: "5. Transferts hors de l’Union européenne",
    blocks: [
      {
        kind: "p",
        text: "Vos données sont hébergées au sein de l’Union européenne. Si certains de nos prestataires devaient traiter des données en dehors de l’UE, nous nous assurons que des garanties appropriées sont mises en place (notamment les clauses contractuelles types de la Commission européenne).",
      },
    ],
  },
  {
    id: "conservation",
    heading: "6. Durées de conservation",
    blocks: [
      {
        kind: "ul",
        items: [
          "Données de compte : conservées pendant toute la durée d’utilisation du service.",
          "Après suppression du compte ou inactivité prolongée : vos données sont supprimées ou anonymisées, sous réserve des durées de conservation imposées par la loi.",
          "Données de connexion : conservées jusqu’à 12 mois conformément à la réglementation applicable.",
          "Données comptables et contractuelles : conservées pendant la durée légale requise.",
        ],
      },
    ],
  },
  {
    id: "securite",
    heading: "7. Sécurité",
    blocks: [
      {
        kind: "p",
        text: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre la perte, l’accès non autorisé, la divulgation ou l’altération : chiffrement des échanges, contrôle des accès, hébergement sécurisé et surveillance de la plateforme.",
      },
    ],
  },
  {
    id: "droits",
    heading: "8. Vos droits",
    blocks: [
      {
        kind: "p",
        text: "Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données personnelles :",
      },
      {
        kind: "ul",
        items: [
          "Droit d’accès et de rectification.",
          "Droit à l’effacement (« droit à l’oubli »).",
          "Droit à la limitation et à l’opposition au traitement.",
          "Droit à la portabilité de vos données.",
          "Droit de retirer votre consentement à tout moment, lorsque le traitement repose sur celui-ci.",
        ],
      },
      {
        kind: "p",
        text: `Vous pouvez exercer ces droits depuis les paramètres de votre compte ou en nous écrivant à ${COMPANY.contactEmail}. Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL (www.cnil.fr).`,
      },
    ],
  },
  {
    id: "cookies",
    heading: "9. Cookies",
    blocks: [
      {
        kind: "p",
        text: "Nous utilisons des cookies et technologies similaires pour assurer le bon fonctionnement de la plateforme, mesurer son audience et, avec votre consentement, personnaliser votre expérience. Vous pouvez gérer vos préférences à tout moment. Pour en savoir plus, consultez notre politique relative aux cookies.",
      },
    ],
  },
  {
    id: "mineurs",
    heading: "10. Mineurs",
    blocks: [
      {
        kind: "p",
        text: "OVRIA s’adresse à des professionnels du BTP majeurs. Nous ne collectons pas sciemment de données concernant des personnes mineures.",
      },
    ],
  },
  {
    id: "modifications",
    heading: "11. Modifications de la politique",
    blocks: [
      {
        kind: "p",
        text: "Nous pouvons être amenés à modifier la présente politique de confidentialité afin de refléter l’évolution de notre service ou de la réglementation. La date de dernière mise à jour figure en haut de cette page ; en cas de changement important, nous vous en informerons par les moyens appropriés.",
      },
    ],
  },
  {
    id: "contact",
    heading: "12. Nous contacter",
    blocks: [
      {
        kind: "p",
        text: `Pour toute question concernant cette politique ou le traitement de vos données, écrivez-nous à ${COMPANY.contactEmail}${
          COMPANY.dpoEmail ? ` (délégué à la protection des données : ${COMPANY.dpoEmail})` : ""
        }.`,
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Container>
            <Reveal className="measure">
              <Eyebrow>Légal</Eyebrow>
              <h1 className="t-display-l mt-4 text-ink">{TITLE}</h1>
              <p className="t-lead mt-6 text-ink-2">
                La présente politique décrit la manière dont OVRIA collecte,
                utilise et protège vos données personnelles lorsque vous utilisez
                notre plateforme de mise en relation directe entre ouvriers du
                BTP et entreprises, accessible sur ovria.fr et via nos
                applications iOS et Android. Nous traitons vos données dans le
                respect du Règlement général sur la protection des données (RGPD)
                et de la loi Informatique et Libertés.
              </p>
              <p className="t-caption mt-4 text-off">
                Dernière mise à jour : {LAST_UPDATED}
              </p>
            </Reveal>

            {/* Table of contents */}
            <Reveal delay={60} className="measure mt-12">
              <nav aria-label="Sommaire">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {SECTIONS.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="t-body-sm text-ink-2 underline-offset-4 duration-250 hover:text-ink hover:underline"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </Reveal>

            <Reveal delay={100} className="measure mt-12 space-y-10">
              {SECTIONS.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24"
                >
                  <h2 className="t-display-m text-ink">{section.heading}</h2>
                  {section.blocks.map((block, i) =>
                    block.kind === "p" ? (
                      <p key={i} className="t-body mt-4 text-ink-2">
                        {block.text}
                      </p>
                    ) : (
                      <ul
                        key={i}
                        className="mt-4 space-y-2 ps-5 t-body text-ink-2 [&>li]:list-disc [&>li]:marker:text-off"
                      >
                        {block.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    ),
                  )}
                </section>
              ))}
            </Reveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
