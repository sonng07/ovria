"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/* Hero showcase: the real OVRIA render. On scroll it slowly rises and
   slides up over the hero text (gentle parallax). Sits above the text
   (z-30) so it visually covers it. Disabled for reduced-motion users. */
export function PhoneMockups({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY || 0;
      const rise = Math.min(y * 0.45, 760); // slow rise, capped
      // Move the phone up...
      el.style.transform = `translate3d(0, ${-rise}px, 0)`;
      // ...and reclaim the space it vacated so the next section rises with it
      // (keeps the gap to the trust strip constant instead of ballooning).
      el.style.marginBottom = `${-rise}px`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "relative z-30 mx-auto flex w-full justify-center will-change-transform",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ovria-app.png"
        alt="L’application OVRIA — votre profil et les entreprises du bâtiment qui recrutent"
        className="fade-in zoom-in-95 animate-in fill-mode-backwards relative w-[min(320px,82vw)] select-none duration-700 sm:w-[440px] md:w-[560px]"
        draggable={false}
      />
    </div>
  );
}
