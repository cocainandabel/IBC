"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
};

function formatValue(n: number): string {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n);
}

export function Counter({ value, prefix = "", suffix = "", durationMs = 1100 }: CounterProps) {
  const [display, setDisplay] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  const formatted = useMemo(
    () => `${prefix}${formatValue(display)}${suffix}`,
    [display, prefix, suffix],
  );

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
  }, [durationMs, hasAnimated, value]);

  return <span ref={ref}>{formatted}</span>;
}
