import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Leadership } from "@/components/sections/Leadership";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Connexxion Group — Meet our executive board, functional directors, and management team building Africa's tomorrow today.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title={
          <>
            The people building <span className="text-grad">Africa's tomorrow today.</span>
          </>
        }
        intro="We assist progressive companies embrace technology to streamline their processes and secure the future of their business. Meet the leaders behind the group."
      />
      <Leadership heading={false} />
    </>
  );
}
