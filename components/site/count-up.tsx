"use client";

import { useEffect, useRef } from "react";
import { animate, useMotionValue, useReducedMotion } from "motion/react";

/** Counts an integer from 0 up to `to` once `start` flips true. The unit
 *  (e.g. " %", " min") rides along as `suffix` so it stays glued to the number.
 *  Reduced-motion users — and the genuinely-zero stats — jump straight to the
 *  final value. Drive several with the same `duration` for a synced sweep. */
export function CountUp({
  to,
  suffix = "",
  duration = 1.6,
  start,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  start: boolean;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const value = useMotionValue(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const render = (v: number) => {
      el.textContent = `${Math.round(v)}${suffix}`;
    };

    if (!start) {
      render(0);
      return;
    }
    if (reduced || to === 0) {
      render(to);
      return;
    }

    const controls = animate(value, to, {
      duration,
      ease: "easeOut",
      onUpdate: render,
    });
    return () => controls.stop();
  }, [start, to, suffix, duration, reduced, value]);

  // SSR / pre-animation paint shows the resting "0 %" etc.
  return <span ref={ref}>{`0${suffix}`}</span>;
}
