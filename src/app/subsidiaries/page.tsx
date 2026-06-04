import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CompaniesExplorer } from "@/components/sections/CompaniesExplorer";

export const metadata: Metadata = {
  title: "Companies",
  description:
    "The companies of Connexxion Group — telecom & IT, energy, fintech, engineering, agriculture, maritime, security and human capital.",
};

export default function SubsidiariesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our companies"
        title={
          <>
            Many companies.<br />
            One <span className="text-grad">Connexxion.</span>
          </>
        }
        intro="Each company is a leader in its field — yet they share one standard of accountability, one appetite for innovation, and one mission to recreate tomorrow today."
      />
      <CompaniesExplorer />
    </>
  );
}
