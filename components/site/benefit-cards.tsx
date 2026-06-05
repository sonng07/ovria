import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type BenefitCard = {
  icon: LucideIcon;
  lead: string;
  rest?: string;
};

export function BenefitCards({
  items,
  className,
}: {
  items: BenefitCard[];
  className?: string;
}) {
  return (
    <ul className={cn("grid gap-3 sm:grid-cols-2", className)}>
      {items.map((it) => (
        <li key={it.lead} className="card-tide h-full p-5">
          <span className="grid size-10 place-items-center rounded-xl border border-secondary/15 bg-secondary/10 text-secondary">
            <it.icon className="size-5" strokeWidth={1.75} />
          </span>
          <p className="mt-4 text-[15px] font-bold tracking-[-0.01em] text-ink">
            {it.lead}
          </p>
          {it.rest ? <p className="t-body-sm mt-1 text-ink-2">{it.rest}</p> : null}
        </li>
      ))}
    </ul>
  );
}
