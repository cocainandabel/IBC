import type { Offer } from "@/data/offer";

type PackageGridProps = {
  packageSection: Offer["packageSection"];
};

export function PackageGrid({ packageSection }: PackageGridProps) {
  return (
    <section id="package" data-reveal>
      <h2 className="font-display text-2xl text-saar-text md:text-4xl">{packageSection.title}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {packageSection.blocks.map((block) => (
          <article
            key={block.title}
            className="rounded-2xl border border-saar-border bg-saar-panel p-5 transition hover:-translate-y-1 hover:shadow-saar-hover"
          >
            <div className="flex items-center gap-3">
              <span className="font-display text-lg text-saar-lime">{block.icon}</span>
              <h3 className="font-display text-lg text-saar-text">{block.title}</h3>
            </div>
            <p className="mt-3 text-sm text-saar-muted">{block.included}</p>
            <ul className="mt-4 space-y-2 text-sm text-saar-muted">
              {block.deliverables.map((deliverable) => (
                <li key={deliverable} className="rounded-xl border border-saar-border bg-saar-surface p-2.5">
                  <span className="mr-2 text-saar-lime">✓</span>
                  {deliverable}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
