type BudgetTableRow = {
  label: string;
  amountUsd: number;
  sharePercent?: number;
  note?: string;
  color?: string;
  total?: boolean;
};

type BudgetTableProps = {
  rows: BudgetTableRow[];
  mode: "share" | "note";
};

function usd(amount: number) {
  return `$${amount.toLocaleString("en-US")}`;
}

export function BudgetTable({ rows, mode }: BudgetTableProps) {
  return (
    <table className="w-full min-w-[420px] text-left">
      <thead>
        <tr className="text-xs uppercase tracking-wider text-binance-muted">
          <th className="pb-2">{mode === "share" ? "Line item" : "Line"}</th>
          <th className="pb-2">Amount</th>
          <th className="pb-2">{mode === "share" ? "Share" : "Note"}</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        {rows.map((row) => (
          <tr
            key={`${row.label}-${row.amountUsd}`}
            className={`border-t border-binance-border ${row.total ? "font-semibold" : ""}`}
          >
            <td className={`py-2 ${row.total ? "text-binance-yellow" : "text-binance-text"}`}>{row.label}</td>
            <td className={`py-2 ${row.total ? "text-binance-yellow" : "text-binance-text"}`}>{usd(row.amountUsd)}</td>
            <td className="py-2 text-binance-muted">
              {mode === "share" ? (
                <span className="inline-flex items-center gap-2">
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-full"
                    style={{ background: row.color ?? "#F0B90B" }}
                  />
                  {row.sharePercent ?? 0}%
                </span>
              ) : (
                row.note
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
