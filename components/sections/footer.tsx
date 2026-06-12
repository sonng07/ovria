import { Container } from "@/components/site/container";
import { Separator } from "@/components/ui/separator";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Produit",
    links: [
      { label: "Pour les travailleurs", href: "#ouvriers" },
      { label: "Pour les entreprises", href: "#entreprises" },
      { label: "Tarifs", href: "#tarifs" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "#" },
      { label: "CGU", href: "#" },
      { label: "Politique de confidentialité", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Nous contacter", href: "#contact" },
      { label: "Support", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="text-xl font-bold tracking-[0.04em] text-ink">OVRIA</p>
            <p className="t-body-sm mt-3 max-w-xs text-ink-2">
              Le BTP, en direct. Sans intermédiaire.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav
              key={col.title}
              aria-label={col.title}
              id={col.title === "Contact" ? "contact" : undefined}
              className="scroll-mt-24"
            >
              <p className="t-eyebrow text-muted-foreground">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="t-body-sm text-ink-2 transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <Separator className="my-8 bg-hairline" />

        {/* TODO: wire a real RGPD consent banner (cookieless Vercel Analytics, or a CMP). */}
        <div className="rounded-2xl border border-hairline bg-surface p-4">
          <p className="t-caption text-ink-2">
            Nous utilisons des cookies pour mesurer l’audience. Vous pouvez accepter ou
            refuser.{" "}
            <a href="#" className="underline underline-offset-2 hover:text-ink">
              Politique cookies
            </a>
            .
          </p>
        </div>

        <p className="t-caption mt-6 text-muted-foreground">
          © 2026 OVRIA. Tous droits réservés.
        </p>
      </Container>
    </footer>
  );
}
