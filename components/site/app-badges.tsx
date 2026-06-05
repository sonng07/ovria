import type { ReactNode } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { AppleLogo } from "@/components/site/apple-logo";

function StoreBadge({
  href,
  glyph,
  top,
  bottom,
  onDark,
}: {
  href: string;
  glyph: ReactNode;
  top: string;
  bottom: string;
  onDark?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={`${top} ${bottom}`}
      className={cn(
        "inline-flex h-[52px] w-full items-center gap-3 rounded-[14px] px-4 whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95 hover:shadow-lg active:translate-y-0 active:shadow-md",
        onDark ? "bg-on-ink text-ink" : "bg-primary text-primary-foreground",
      )}
    >
      <span className="grid size-7 place-items-center">{glyph}</span>
      <span className="flex flex-col text-left leading-none">
        <span className="text-[10px] font-medium opacity-75">{top}</span>
        <span className="text-[17px] font-semibold tracking-[-0.01em]">{bottom}</span>
      </span>
    </a>
  );
}

/** Placeholder store badges. Conversion target — swap for the official
 *  Apple "Download on the App Store" + Google "Get it on Google Play"
 *  SVG artwork (FR locale) before launch; store guidelines require it.
 *  `onDark` flips colors for use on the ink final-CTA band. */
export function AppBadges({
  className,
  onDark,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <div className={cn("grid w-full gap-3 sm:w-fit sm:grid-cols-2", className)}>
      {/* TODO: replace with official App Store + Google Play SVG badges (FR locale). */}
      <StoreBadge
        href="#telecharger"
        top="Télécharger dans l’"
        bottom="App Store"
        onDark={onDark}
        glyph={<AppleLogo className="size-5" />}
      />
      <StoreBadge
        href="#telecharger"
        top="Disponible sur"
        bottom="Google Play"
        onDark={onDark}
        glyph={<Play className="size-5 fill-current" />}
      />
    </div>
  );
}
