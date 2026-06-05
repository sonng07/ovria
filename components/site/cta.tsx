import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "glass" | "ghost";

const base =
  "inline-flex h-13 items-center justify-center gap-2 rounded-pill px-7 text-base font-semibold transition-[transform,background-color,opacity,box-shadow] duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50";

const byVariant: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_14px_34px_-20px_rgba(99,78,193,0.85)] hover:-translate-y-px hover:opacity-90",
  glass: "glass text-ink hover:bg-surface-strong",
  ghost: "text-ink hover:bg-[rgba(26,26,23,0.06)]",
};

/** Tide CTA classes — usable on any element (link, button, shadcn Button). */
export function ctaClass(variant: Variant = "primary", className?: string) {
  return cn(base, byVariant[variant], className);
}

/** Anchor styled as a Tide CTA (most CTAs link to the app / sign-up). */
export function CtaLink({
  variant = "primary",
  className,
  children,
  ...props
}: {
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={ctaClass(variant, className)} {...props}>
      {children}
    </a>
  );
}
