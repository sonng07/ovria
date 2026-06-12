import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "glass" | "ghost";
type Size = "sm" | "default";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition-[transform,background-color,opacity,box-shadow] duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50";

/** Size scale. `default` is the full-size marketing CTA — it eases its
 *  height/padding down on small screens so it never feels oversized on
 *  mobile. `sm` is the compact pill for the slim header bar. */
const bySize: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  default: "h-12 px-6 text-base sm:h-13 sm:px-7",
};

const byVariant: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_14px_34px_-20px_rgba(99,78,193,0.85)] hover:-translate-y-px hover:opacity-90",
  glass: "glass text-ink hover:bg-surface-strong",
  ghost: "text-ink hover:bg-[rgba(26,26,23,0.06)]",
};

/** Tide CTA classes — usable on any element (link, button, shadcn Button). */
export function ctaClass(
  variant: Variant = "primary",
  size: Size = "default",
  className?: string,
) {
  return cn(base, bySize[size], byVariant[variant], className);
}

/** Anchor styled as a Tide CTA (most CTAs link to the app / sign-up). */
export function CtaLink({
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={ctaClass(variant, size, className)} {...props}>
      {children}
    </a>
  );
}
