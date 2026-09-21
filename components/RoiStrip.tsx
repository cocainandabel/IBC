import { micrositeData } from "@/data/scenarios";
import { SectionMotion } from "./SectionMotion";

export function RoiStrip() {
  const roi = micrositeData.roi;

  return (
    <SectionMotion className="mt-14" delay={0.05}>
      <h2 className="font-display text-2xl font-semibold text-binance-text md:text-4xl">
        {roi.title}
      </h2>
      <div className="mt-6 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible xl:grid-cols-3">
        {roi.cards.map((card) => (
          <article
            key={card.metric}
            className="min-w-[280px] rounded-2xl border border-binance-border bg-binance-slate p-5 transition hover:shadow-card-hover md:min-w-0"
          >
            <p className="font-display text-lg text-binance-yellow">{card.metric}</p>
            <p className="mt-2 text-sm font-semibold text-binance-text">{card.target}</p>
            <p className="mt-2 text-sm text-binance-muted">{card.why}</p>
          </article>
        ))}
      </div>
      <p className="mt-5 text-sm text-binance-muted">{roi.note}</p>
    </SectionMotion>
  );
}
