import { SaarProposalPage } from "@/components/SaarProposalPage";
import { kols, wallets } from "@/data/kols";
import { offer } from "@/data/offer";

export const dynamic = "force-static";

export default function Page() {
  return <SaarProposalPage offer={offer} kols={kols} wallets={wallets} />;
}
