import type { Offer } from "@/data/offer";

type AllocationChartProps = {
  packageSection: Offer["packageSection"];
};

const colors = ["#C6FF3D", "#FF3DA6", "#86FF8A", "#D8FF77", "#FF77C2"];

function money(amount: number): string {
  return `$${amount.toLocaleString("en-US")}`;
}

export function AllocationChart({ packageSection }: AllocationChartProps) {
  const total = packageSection.allocationLines.reduce((sum, line) => sum + line.amount, 0);
  const radius = 62;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <section className="rounded-2xl border border-saar-border bg-saar-panel p-5">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-display text-xl text-saar-text">{packageSection.allocationTitle}</h3>
        <span className="rounded-full border border-saar-border bg-saar-surface px-2.5 py-1 text-xs text-saar-muted">
          {packageSection.indicativeLabel}
        </span>
      </div>

      <div className="mt-4 grid gap-5 lg:grid-cols-[180px,1fr]">
        <div className="mx-auto h-[180px] w-[180px]">
          <svg viewBox="0 0 160 160" className="h-full w-full" role="img" aria-label={packageSection.allocationTitle}>
            <circle cx="80" cy="80" r={radius} stroke="#262633" strokeWidth="18" fill="none" />
            {packageSection.allocationLines.map((line, index) => {
              const length = (line.amount / total) * circumference;
              const dashArray = `${length} ${circumference - length}`;
              const segmentOffset = -offset;
              offset += length;
              return (
                <circle
                  key={line.line}
                  cx="80"
                  cy="80"
                  r={radius}
                  stroke={colors[index % colors.length]}
                  strokeWidth="18"
                  fill="none"
                  strokeDasharray={dashArray}
                  strokeDashoffset={segmentOffset}
                  transform="rotate(-90 80 80)"
                  strokeLinecap="butt"
                />
              );
            })}
            <text x="50%" y="49%" textAnchor="middle" className="fill-saar-muted text-[9px] uppercase tracking-[0.2em]">
              {packageSection.totalLabel}
            </text>
            <text x="50%" y="60%" textAnchor="middle" className="fill-saar-lime text-[16px] font-semibold">
              {money(total)}
            </text>
          </svg>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-[0.18em] text-saar-muted">
                <th className="pb-2">{packageSection.lineHeader}</th>
                <th className="pb-2">{packageSection.amountHeader}</th>
              </tr>
            </thead>
            <tbody>
              {packageSection.allocationLines.map((line, index) => (
                <tr key={line.line} className="border-t border-saar-border">
                  <td className="py-2 text-saar-text">
                    <span className="inline-flex items-center gap-2">
                      <span
                        className="inline-block h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: colors[index % colors.length] }}
                      />
                      {line.line}
                    </span>
                  </td>
                  <td className="py-2 text-saar-muted">{money(line.amount)}</td>
                </tr>
              ))}
              <tr className="border-t border-saar-border">
                <td className="py-2 font-semibold text-saar-lime">{packageSection.totalLabel}</td>
                <td className="py-2 font-semibold text-saar-lime">{money(total)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
