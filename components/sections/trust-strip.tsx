"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { CountUp } from "@/components/site/count-up";

const STATS = [
  { to: 0, suffix: " %", label: "de commission" },
  { to: 2, suffix: " min", label: "pour créer votre profil" },
  { to: 100, suffix: " %", label: "gratuit côté ouvrier" },
];

/** Shared count-up duration so all three stats sweep in lockstep. */
const COUNT_DURATION = 1.6;

export function TrustStrip() {
  const ref = useRef<HTMLDListElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div className="-mt-16 pt-[clamp(24px,4vw,48px)] pb-2">
      <Container>
        <Reveal>
          <dl
            ref={ref}
            className="grid grid-cols-1 divide-y divide-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-1.5 px-6 py-8 text-center"
              >
                <dt className="t-display-m text-ink">
                  <CountUp
                    to={s.to}
                    suffix={s.suffix}
                    duration={COUNT_DURATION}
                    start={inView}
                  />
                </dt>
                <dd className="t-eyebrow text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </div>
  );
}
