"use client";

import { useMemo, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { Scenario } from "@/data/scenarios";

type BudgetChartProps = {
  scenario: Scenario;
};

const basePalette = [
  "#F0B90B",
  "#8B5CF6",
  "#22C55E",
  "#3B82F6",
  "#F59E0B",
  "#A855F7",
  "#06B6D4",
  "#10B981",
  "#84CC16",
  "#F97316",
];

function usd(amount: number) {
  return `$${amount.toLocaleString("en-US")}`;
}

export function BudgetChart({ scenario }: BudgetChartProps) {
  const [tierIndex, setTierIndex] = useState(0);

  const activeTier = scenario.budgetTiers[tierIndex];
  const chartData = useMemo(
    () =>
      scenario.budgetLines.map((line, idx) => ({
        name: line.item,
        value: line.allocations[tierIndex] ?? 0,
        fill: basePalette[idx % basePalette.length],
      })),
    [scenario.budgetLines, tierIndex],
  );

  return (
    <section className="rounded-2xl border border-binance-border bg-binance-slate p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h4 className="font-display text-lg text-binance-text">Budget split</h4>
        {scenario.budgetTiers.length > 1 ? (
          <div className="flex items-center gap-2 rounded-full border border-binance-border bg-binance-panel p-1">
            {scenario.budgetTiers.map((tier, idx) => (
              <button
                key={tier.id}
                type="button"
                className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                  idx === tierIndex
                    ? "bg-binance-yellow text-binance-charcoal"
                    : "text-binance-muted hover:text-binance-text"
                }`}
                onClick={() => setTierIndex(idx)}
              >
                {tier.label}
              </button>
            ))}
          </div>
        ) : (
          <span className="rounded-full border border-binance-border px-3 py-1 text-xs text-binance-muted">
            {activeTier.label}
          </span>
        )}
      </div>

      <div className="mt-4 grid gap-6 lg:grid-cols-[320px,1fr]">
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                innerRadius={70}
                outerRadius={110}
                stroke="#2B3139"
                strokeWidth={1}
                paddingAngle={2}
              >
                {chartData.map((entry) => (
                  <Cell key={entry.name} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => {
                  const numericValue = typeof value === "number" ? value : Number(value ?? 0);
                  return usd(Number.isNaN(numericValue) ? 0 : numericValue);
                }}
                contentStyle={{
                  background: "#181A20",
                  border: "1px solid #2B3139",
                  borderRadius: "12px",
                  color: "#EAECEF",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div>
          <p className="font-display text-4xl font-bold text-binance-yellow">
            {usd(activeTier.totalUsd)}
          </p>
          <p className="text-sm text-binance-muted">Total budget for selected tier</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[420px] text-left">
              <thead>
                <tr className="text-xs uppercase tracking-wider text-binance-muted">
                  <th className="pb-2">Line item</th>
                  <th className="pb-2">Amount</th>
                  <th className="pb-2">Share</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {scenario.budgetLines.map((line, idx) => {
                  const value = line.allocations[tierIndex] ?? 0;
                  const share = activeTier.totalUsd
                    ? Math.round((value / activeTier.totalUsd) * 100)
                    : 0;
                  return (
                    <tr key={line.item} className="border-t border-binance-border">
                      <td className="py-2 text-binance-text">{line.item}</td>
                      <td className="py-2 text-binance-text">{usd(value)}</td>
                      <td className="py-2 text-binance-muted">
                        <span className="inline-flex items-center gap-2">
                          <span
                            className="inline-block h-2.5 w-2.5 rounded-full"
                            style={{ background: basePalette[idx % basePalette.length] }}
                          />
                          {share}%
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
