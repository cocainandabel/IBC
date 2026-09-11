import type { Scenario } from "@/data/scenarios";

type KpiCardsProps = {
  scenario: Scenario;
};

export function KpiCards({ scenario }: KpiCardsProps) {
  return (
    <section>
      <h4 className="mb-4 font-display text-lg text-binance-text">KPIs</h4>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {scenario.kpis.map((kpi) => (
          <article
            key={kpi.label}
            className="rounded-2xl border border-binance-border bg-binance-slate p-4 transition hover:shadow-card-hover"
          >
            <p className="font-display text-3xl font-bold text-binance-yellow">{kpi.value}</p>
            <p className="mt-1 text-sm text-binance-muted">{kpi.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
