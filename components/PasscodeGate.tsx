"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

const SESSION_KEY = "saar-proposal-unlocked";

type PasscodeCopy = {
  title: string;
  subtitle: string;
  inputLabel: string;
  inputPlaceholder: string;
  unlockButtonLabel: string;
  errorMessage: string;
};

type PasscodeGateProps = {
  copy: PasscodeCopy;
  children: React.ReactNode;
};

export function PasscodeGate({ copy, children }: PasscodeGateProps) {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [hasError, setHasError] = useState(false);

  const expectedPasscode = useMemo(
    () => process.env.NEXT_PUBLIC_SITE_PASSCODE ?? "saar",
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

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div className="mx-auto mt-20 w-full max-w-md rounded-3xl border border-saar-border bg-saar-panel p-6 shadow-saar-card">
      <h1 className="text-2xl font-semibold text-saar-text">{copy.title}</h1>
      <p className="mt-3 text-sm text-saar-muted">{copy.subtitle}</p>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-2 text-sm text-saar-muted">
          {copy.inputLabel}
          <input
            type="password"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder={copy.inputPlaceholder}
            className="rounded-xl border border-saar-border bg-saar-base px-3 py-2 text-saar-text outline-none ring-saar-lime/50 transition focus:ring-2"
          />
        </label>
        {hasError ? <p className="text-sm text-saar-magenta">{copy.errorMessage}</p> : null}
        <button
          type="submit"
          className="w-full rounded-xl bg-saar-lime px-4 py-2 font-semibold text-saar-base transition hover:brightness-105"
        >
          {copy.unlockButtonLabel}
        </button>
      </form>
    </div>
  );
}
