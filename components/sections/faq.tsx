import { Section } from "@/components/site/section";
import { Container } from "@/components/site/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: { q: string; a: string }[] = [
  {
    q: "OVRIA, c’est vraiment gratuit pour les ouvriers ?",
    a: "Oui. Créer un profil, être visible et recevoir des messages, c’est 100 % gratuit, pour toujours. Aucune carte bancaire demandée.",
  },
  {
    q: "Comment gagne OVRIA, alors ?",
    a: "Les entreprises paient un abonnement mensuel pour contacter les ouvriers. C’est tout. Aucune commission n’est prélevée sur une embauche, ni côté ouvrier, ni côté entreprise.",
  },
  {
    q: "Combien ça coûte pour une entreprise ?",
    a: "Un abonnement mensuel, sans engagement, résiliable à tout moment. Vous recevez une facture pro avec TVA.",
  },
  {
    q: "C’est quoi un « signal d’intérêt » ?",
    a: "C’est un moyen pour l’ouvrier de dire « je suis intéressé » à une entreprise, en un geste, sans envoyer de message. L’entreprise reçoit une alerte. C’est discret et limité, pour éviter le spam.",
  },
  {
    q: "En quoi c’est différent d’une agence d’intérim ?",
    a: "Pas d’intermédiaire et pas de commission. L’ouvrier et l’entreprise se parlent en direct. Vous gardez le contrôle, et personne ne prélève de marge sur votre travail.",
  },
  {
    q: "En quoi c’est différent d’Indeed ou LinkedIn ?",
    a: "OVRIA est fait pour le BTP, pas pour tous les métiers. On voit la disponibilité réelle, le niveau et la zone — pas juste un CV en texte. Et l’entreprise vous contacte directement.",
  },
  {
    q: "Mes données sont-elles protégées ?",
    a: "Oui. OVRIA est hébergé en conformité avec le RGPD. Vos informations restent les vôtres, et vous pouvez les supprimer à tout moment.",
  },
  {
    q: "L’app est dispo sur iPhone et Android ?",
    a: "Oui, sur l’App Store et Google Play.",
  },
  {
    q: "Ça marche dans quelle région ?",
    a: "OVRIA est disponible en France.",
  },
];

export function Faq() {
  return (
    <Section id="faq">
      <Container>
        <div className="mx-auto measure">
          <h2 className="t-display-l text-ink">Questions fréquentes</h2>
          <Accordion className="mt-8">
            {FAQ.map((item, i) => (
              <AccordionItem key={item.q} value={`q-${i}`} className="border-hairline">
                <AccordionTrigger className="py-5 text-[17px] font-semibold text-ink hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="t-body text-ink-2">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}
