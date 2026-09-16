"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import type { StrategyLocaleData } from "@/data/strategy.types";

const SESSION_KEY = "af-strategy-unlocked";

type PasscodeGateProps = {
  copy: StrategyLocaleData["gate"];
  children: React.ReactNode;
};

export function PasscodeGate({ copy, children }: PasscodeGateProps) {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [hasError, setHasError] = useState(false);

  const expectedPasscode = useMemo(
    () => process.env.NEXT_PUBLIC_SITE_PASSCODE ?? "fortress",
    [],
  );

  useEffect(() => {
    try {
      const saved = window.sessionStorage.getItem(SESSION_KEY);
      if (saved === "true") {
        setUnlocked(true);
      }
    } catch {
      // Ignore storage read errors.
    } finally {
      setHydrated(true);
    }
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.trim() === expectedPasscode) {
      setUnlocked(true);
      setHasError(false);
      try {
        window.sessionStorage.setItem(SESSION_KEY, "true");
      } catch {
        // Ignore storage write errors.
      }
      return;
    }
    setHasError(true);
  };

  if (!hydrated) {
    return null;
  }

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div className="mx-auto mt-16 w-full max-w-md rounded-3xl border border-fortress-border bg-fortress-panel p-6 shadow-fortress-card">
      <h1 className="font-display text-2xl text-fortress-text">{copy.title}</h1>
      <p className="mt-3 text-sm text-fortress-muted">{copy.subtitle}</p>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-2 text-sm text-fortress-muted">
          {copy.inputLabel}
          <input
            type="password"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder={copy.inputPlaceholder}
            className="rounded-xl border border-fortress-border bg-fortress-base px-3 py-2 text-fortress-text outline-none ring-fortress-gold/40 transition focus:ring-2"
          />
        </label>
        {hasError ? <p className="text-sm text-fortress-red">{copy.error}</p> : null}
        <button
          type="submit"
          className="w-full rounded-xl bg-fortress-gold px-4 py-2 font-semibold text-fortress-base transition hover:brightness-105"
        >
          {copy.button}
        </button>
      </form>
    </div>
  );
}
