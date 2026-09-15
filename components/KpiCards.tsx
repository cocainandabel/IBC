type KpiCardsProps = {
  kpis: {
    label: string;
    value: string;
  }[];
  title?: string;
};

export function KpiCards({ kpis, title = "KPIs" }: KpiCardsProps) {
  return (
    <section>
      <h4 className="mb-4 font-display text-lg text-binance-text">{title}</h4>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {kpis.map((kpi) => (
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
