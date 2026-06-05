"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * Decorative dotted-grid background with cursor tracking.
 * - A faint dot grid is always visible.
 * - A brighter "spotlight" of dots is revealed around the pointer.
 *
 * Pointer tracking listens on `window` (throttled with rAF) and writes the
 * cursor position into CSS vars, so it keeps working even though the layer
 * itself is `pointer-events-none` and sits behind the hero content.
 */
export function DotGrid({
  className,
  gap = 22,
  radius = 170,
}: {
  className?: string;
  /** Spacing between dots, in px. */
  gap?: number;
  /** Radius of the cursor spotlight, in px. */
  radius?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const inside = x >= 0 && y >= 0 && x <= r.width && y <= r.height;
        el.style.setProperty("--x", `${x}px`);
        el.style.setProperty("--y", `${y}px`);
        el.style.setProperty("--spot", inside ? "1" : "0");
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const dots = (color: string): CSSProperties => ({
    backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
    backgroundSize: `${gap}px ${gap}px`,
  });

  const spotlight = `radial-gradient(${radius}px circle at var(--x) var(--y), #000 0%, transparent 72%)`;
  // Soft, gradual fade of the whole grid toward the bottom of the hero.
  const bottomFade = "linear-gradient(to bottom, #000 45%, transparent 92%)";

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-y-0 left-0 w-full overflow-hidden",
        className,
      )}
      style={
        {
          "--x": "50%",
          "--y": "50%",
          "--spot": "0",
          WebkitMaskImage: bottomFade,
          maskImage: bottomFade,
        } as CSSProperties
      }
    >
      {/* Always-on faint grid */}
      <div
        className="absolute inset-0"
        style={dots("color-mix(in srgb, var(--ink) 13%, transparent)")}
      />
      {/* Brighter dots revealed around the cursor */}
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-out"
        style={{
          opacity: "var(--spot)" as unknown as number,
          ...dots("color-mix(in srgb, var(--ink) 55%, transparent)"),
          WebkitMaskImage: spotlight,
          maskImage: spotlight,
        }}
      />
    </div>
  );
}
