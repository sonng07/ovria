import { Section } from "@/components/site/section";
import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";

const QUOTES = [
  {
    quote:
      "En une semaine, deux entreprises m’ont écrit. Je n’avais jamais eu ça sur Indeed.",
    role: "Ouvrier — exemple à remplacer",
  },
  {
    quote: "Trois profils sérieux en dix minutes, sans payer d’agence.",
    role: "Dirigeant de PME — exemple à remplacer",
  },
];

export function SocialProof() {
  return (
    <Section>
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Ils utilisent OVRIA</Eyebrow>
          <h2 className="t-display-l mt-4 text-ink">Le BTP, en plus direct.</h2>
          <p className="t-caption mt-4 text-muted-foreground">
            {/* Honesty: no fabricated testimonials. Clearly-marked examples until
                real quotes exist. */}
            Exemples — remplacés par de vrais témoignages au lancement.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {QUOTES.map((q, i) => (
            <Reveal key={q.role} delay={i * 90}>
              <figure className="card-tide flex h-full flex-col p-8">
                <span className="self-start rounded-pill border border-hairline bg-surface px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                  Exemple
                </span>
                <blockquote className="t-display-m mt-5 font-normal text-ink">
                  « {q.quote} »
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid size-10 flex-none place-items-center rounded-full border border-dashed border-hairline text-muted-foreground">
                    ?
                  </span>
                  <span className="t-body-sm text-muted-foreground">{q.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
