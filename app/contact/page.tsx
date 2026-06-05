import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/site/section";
import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { ContactSection } from "@/components/contact-section";
import { Contact } from "@/components/contact";

const TITLE = "Contact";
const DESCRIPTION =
  "Une question, un besoin d’aide ou une demande de partenariat ? Contactez l’équipe OVRIA.";

export const metadata: Metadata = {
  title: `${TITLE} — OVRIA`,
  description: DESCRIPTION,
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <Section id="contact">
          <Container>
            <Reveal className="measure">
              <Eyebrow>Contact</Eyebrow>
              <h1 className="t-display-l mt-4 text-ink">Contactez-nous</h1>
              <p className="t-lead mt-6 text-ink-2">
                Le BTP, en direct. Une question sur OVRIA, un besoin d’aide ou
                une demande de partenariat ? Notre équipe vous répond.
              </p>
            </Reveal>

            <Reveal delay={80} className="mt-12">
              <ContactSection />
            </Reveal>

            <Reveal delay={120} className="mt-16">
              <Contact />
            </Reveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
