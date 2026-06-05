import { cn } from "@/lib/utils";

/**
 * Ovria wordmark. Consumed by registry blocks (e.g. footer-3) that import
 * `@/components/logo`. Uses the `text-ink` Tide token so it reskins with the
 * design system — never hardcode a hex here.
 */
export function Logo({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-lg font-bold leading-none tracking-[0.08em] text-ink",
        className,
      )}
      {...props}
    >
      OVRIA
    </span>
  );
}
