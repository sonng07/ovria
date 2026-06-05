import { cn } from "@/lib/utils";

type Status = "available" | "open" | "off";

const MAP: Record<Status, { color: string; label: string }> = {
  available: { color: "var(--ok)", label: "Disponible" },
  open: { color: "var(--open)", label: "Ouvert aux opportunités" },
  off: { color: "var(--off)", label: "Indisponible" },
};

/** Two-axis status: a colored dot + a dark text label — never color alone
 *  (colorblind users + bright sunlight on a construction site). */
export function StatusBadge({
  status = "available",
  className,
}: {
  status?: Status;
  className?: string;
}) {
  const s = MAP[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[13px] font-semibold text-ink",
        className,
      )}
    >
      <span className="dot" style={{ color: s.color, background: s.color }} aria-hidden />
      {s.label}
    </span>
  );
}
