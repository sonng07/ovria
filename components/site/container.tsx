import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[var(--container)] px-[clamp(20px,5vw,32px)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
