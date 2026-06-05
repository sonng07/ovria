import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Vertical section rhythm wrapper. Full-width by default; drop a
 *  <Container> inside for the centered measure. */
export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 py-[clamp(64px,10vw,128px)]", className)}
    >
      {children}
    </section>
  );
}
