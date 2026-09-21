import type { StrategyLocaleData } from "@/data/strategy.types";

type RolesGridProps = {
  roles: StrategyLocaleData["roles"];
};

export function RolesGrid({ roles }: RolesGridProps) {
  return (
    <section>
      <h2 className="font-display text-2xl text-fortress-text md:text-4xl">{roles.title}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {roles.columns.map((column) => (
          <article
            key={column.owner}
            className="rounded-2xl border border-fortress-border bg-fortress-panel p-5 transition hover:shadow-fortress-hover"
          >
            <h3 className="font-display text-lg text-fortress-gold">{column.owner}</h3>
            <ul className="mt-3 space-y-2 text-sm text-fortress-muted">
              {column.responsibilities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
