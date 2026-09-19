"use client";

import { useMemo, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { defaultBudgetTotal } from "@/data/strategy";
import type { StrategyLocaleData } from "@/data/strategy.types";

type BudgetOutlineProps = {
  budget: StrategyLocaleData["budget"];
};

const chartColors = ["#D4A64A", "#4F8BFF", "#E5484D", "#6A7A95", "#7DB0FF", "#F17A7E"];

function usd(value: number): string {
  return `$${value.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
}

export function BudgetOutline({ budget }: BudgetOutlineProps) {
  const [totalBudget, setTotalBudget] = useState(defaultBudgetTotal);

  const rows = useMemo(
    () =>
      budget.lines.map((line, index) => ({
        ...line,
        amount: (totalBudget * line.sharePercent) / 100,
        color: chartColors[index % chartColors.length],
      })),
    [budget.lines, totalBudget],
  );

  return (
    <section>
      <div className="flex flex-wrap items-center gap-3">
        <h2 className="font-display text-2xl text-fortress-text md:text-4xl">{budget.title}</h2>
        <span className="rounded-full border border-fortress-border bg-fortress-surface px-3 py-1 text-xs text-fortress-gold">
          {budget.indicativeBadge}
        </span>
      </div>

      <div className="mt-5 rounded-2xl border border-fortress-border bg-fortress-panel p-5">
        <label className="block text-sm text-fortress-muted">
          {budget.totalInputLabel}
          <input
            type="number"
            min={0}
            step={1000}
            value={Number.isFinite(totalBudget) ? totalBudget : 0}
            onChange={(event) => {
              const next = Number(event.target.value);
              setTotalBudget(Number.isFinite(next) ? next : 0);
            }}
            className="mt-2 w-full rounded-xl border border-fortress-border bg-fortress-base px-3 py-2 text-fortress-text outline-none ring-fortress-gold/40 transition focus:ring-2 md:max-w-xs"
          />
        </label>

        <div className="mt-6 grid gap-6 lg:grid-cols-[320px,1fr]">
          <div className="h-[280px] w-full">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-fortress-muted">{budget.chartTitle}</p>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={rows} dataKey="amount" nameKey="line" innerRadius={70} outerRadius={110} paddingAngle={2}>
                  {rows.map((item) => (
                    <Cell key={item.line} fill={item.color} stroke="#1F2A40" />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => usd(typeof value === "number" ? value : Number(value))}
                  contentStyle={{
                    background: "#0E1524",
                    border: "1px solid #1F2A40",
                    borderRadius: 12,
                    color: "#E6EAF2",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-[0.14em] text-fortress-muted">
                  <th className="pb-2">{budget.lineHeader}</th>
                  <th className="pb-2">{budget.shareHeader}</th>
                  <th className="pb-2">{budget.amountHeader}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.line} className="border-t border-fortress-border">
                    <td className="py-2 text-fortress-text">
                      <span className="inline-flex items-center gap-2">
                        <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: row.color }} />
                        {row.line}
                      </span>
                    </td>
                    <td className="py-2 text-fortress-muted">{row.sharePercent}%</td>
                    <td className="py-2 text-fortress-text">{usd(row.amount)}</td>
                  </tr>
                ))}
                <tr className="border-t border-fortress-border">
                  <td className="py-2 font-semibold text-fortress-gold">{budget.totalLabel}</td>
                  <td className="py-2 font-semibold text-fortress-gold">100%</td>
                  <td className="py-2 font-semibold text-fortress-gold">{usd(totalBudget)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-5 rounded-xl border border-fortress-border bg-fortress-surface p-3 text-sm text-fortress-muted">
          {budget.recommendation}
        </p>
      </div>
    </section>
  );
}
