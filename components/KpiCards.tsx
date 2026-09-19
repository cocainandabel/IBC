import type { Offer } from "@/data/offer";

type KpiCardsProps = {
  kpis: Offer["kpis"];
};

export function KpiCards({ kpis }: KpiCardsProps) {
  return (
    <section data-reveal>
      <h2 className="font-display text-2xl text-saar-text md:text-4xl">{kpis.title}</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
        {kpis.items.map((item) => (
          <article key={item.label} className="rounded-2xl border border-saar-border bg-saar-panel p-4">
            <p className="font-display text-3xl text-saar-lime">{item.value}</p>
            <p className="mt-1 text-sm text-saar-text">{item.label}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-saar-muted">{item.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
