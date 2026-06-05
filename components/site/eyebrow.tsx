import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <p className={cn("t-eyebrow text-muted-foreground", className)}>{children}</p>;
}
