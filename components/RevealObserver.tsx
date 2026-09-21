"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (revealElements.length === 0) {
      return;
    }

    revealElements.forEach((element) => element.classList.add("reveal-pending"));

    const revealAll = () => {
      revealElements.forEach((element) => {
        element.classList.add("is-visible");
        element.classList.remove("reveal-pending");
      });
    };

    if (typeof window.IntersectionObserver === "undefined") {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            entry.target.classList.remove("reveal-pending");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.16 },
    );

    revealElements.forEach((element) => observer.observe(element));
    const failSafeTimeout = window.setTimeout(revealAll, 2200);

    return () => {
      observer.disconnect();
      window.clearTimeout(failSafeTimeout);
    };
  }, []);

  return null;
}
