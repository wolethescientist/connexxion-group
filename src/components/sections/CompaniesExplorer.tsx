"use client";

import { useMemo, useState } from "react";
import { subsidiaries } from "@/lib/content";
import { CompanyGrid } from "./CompanyGrid";

export function CompaniesExplorer() {
  const filters = useMemo(() => {
    const set = Array.from(new Set(subsidiaries.map((s) => s.sector)));
    return ["All", ...set];
  }, []);
  const [active, setActive] = useState("All");

  const items =
    active === "All"
      ? subsidiaries
      : subsidiaries.filter((s) => s.sector === active);

  return (
    <div className="shell pb-28 md:pb-36">
      <div className="mb-12 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
              active === f
                ? "border-emerald bg-emerald text-[#04120a]"
                : "border-white/15 text-mute hover:border-white/40 hover:text-ghost"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <CompanyGrid key={active} items={items} />
    </div>
  );
}
