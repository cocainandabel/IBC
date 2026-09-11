"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type CounterProps = {
  value: number;
  suffix?: string;
};

function formatValue(n: number): string {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n);
}

export function Counter({ value, suffix = "" }: CounterProps) {
  const [display, setDisplay] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  const formatted = useMemo(() => `${formatValue(display)}${suffix}`, [display, suffix]);

  useEffect(() => {
    if (!ref.current || hasAnimated) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting);
        if (!isVisible) {
          return;
        }
        setHasAnimated(true);
        const durationMs = 1200;
        const startAt = performance.now();

        const tick = (nowTs: number) => {
          const progress = Math.min((nowTs - startAt) / durationMs, 1);
          const nextValue = Math.floor(value * progress);
          setDisplay(nextValue);
          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated, value]);

  return <span ref={ref}>{formatted}</span>;
}
