"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (revealElements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.16 },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
