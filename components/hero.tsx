import { AppleLogo } from "@/components/site/apple-logo";
import { DotGrid } from "@/components/site/dot-grid";
import { Eyebrow } from "@/components/site/eyebrow";
import { PhoneMockups } from "@/components/site/phone-mock";

/* Colorful Google Play glyph (stylized — swap for the official badge
   artwork before launch, per store guidelines). */
function GooglePlayGlyph() {
  return (
    <svg viewBox="0 0 512 512" className="size-5" aria-hidden="true">
      <path
        fill="#00c3ff"
        d="M47 0C36.3 5.6 29.3 15.7 29.3 28.9v454.2c0 13.2 7 23.3 17.7 28.9l256.7-256L47 0z"
      />
      <path fill="#ff3d44" d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1z" />
      <path
        fill="#ffc900"
        d="m469.7 234.6-68.4-39.2-72.5 72.5 72.5 72.5 70.1-40.2c20.5-16.2 20.5-49.4-1.7-65.6z"
      />
      <path fill="#00d95f" d="M104.6 502.9 325.3 282.2l60.1 60.1L104.6 502.9z" />
    </svg>
  );
}

function StoreBadge({
  href,
  glyph,
  top,
  bottom,
  variant,
}: {
  href: string;
  glyph: React.ReactNode;
  top: string;
  bottom: string;
  variant: "dark" | "light";
}) {
  return (
    <a
      href={href}
      aria-label={`${top} ${bottom}`}
      className={
        "inline-flex h-[52px] w-full items-center gap-2.5 rounded-xl px-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-md " +
        (variant === "dark"
          ? "bg-neutral-900 text-white border border-white/10 hover:opacity-90"
          : "border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50")
      }
    >
      <span className="grid size-6 place-items-center">{glyph}</span>
      <span className="flex flex-col text-left leading-none">
        <span className="text-[10px] opacity-80">{top}</span>
        <span className="text-[16px] font-semibold tracking-[-0.01em]">{bottom}</span>
      </span>
    </a>
  );
}

export function HeroSection() {
  return (
    <section className="relative isolate mx-auto w-full max-w-5xl px-6 pt-20 pb-0 text-center md:pt-24">
      <DotGrid className="-z-10 left-1/2 w-screen -translate-x-1/2" />

      <Eyebrow className="mb-4">Le BTP, en direct</Eyebrow>

      <h1 className="mx-auto max-w-2xl text-balance text-4xl font-bold tracking-tight md:text-6xl">
        <span className="block">Le chantier et l’ouvrier,</span>
        <span className="block">en direct.</span>
      </h1>

      <p className="mx-auto mt-5 max-w-lg text-balance text-base text-muted-foreground md:text-lg">
        OVRIA met en relation les ouvriers du BTP et les entreprises du bâtiment
        en France. Sans agence. Sans commission.
      </p>

      <div className="mx-auto mt-7 grid w-full max-w-xs grid-cols-1 gap-3 sm:w-fit sm:max-w-none sm:grid-cols-2">
        <StoreBadge
          href="#download"
          variant="dark"
          top="Télécharger dans l’"
          bottom="App Store"
          glyph={<AppleLogo className="size-5" />}
        />
        <StoreBadge
          href="#download"
          variant="light"
          top="Disponible sur"
          bottom="Google Play"
          glyph={<GooglePlayGlyph />}
        />
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Gratuit pour les ouvriers · Sans commission pour personne
      </p>

      <div className="relative mt-16 md:mt-20">
        <PhoneMockups />
      </div>
    </section>
  );
}
