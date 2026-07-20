"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ListingCard } from "@/components/ui/ListingCard";
import { marketplaceListings, type ListingType } from "@/lib/data";
import { cn } from "@/lib/utils";

const filters: { label: string; value: ListingType | "all" }[] = [
  { label: "All Listings", value: "all" },
  { label: "Trucks", value: "truck" },
  { label: "Cargo", value: "cargo" },
  { label: "Containers", value: "container" },
  { label: "Agriculture", value: "agriculture" },
];

export function MarketplacePreview() {
  const [active, setActive] = useState<ListingType | "all">("all");

  const visible =
    active === "all"
      ? marketplaceListings
      : marketplaceListings.filter((l) => l.type === active);

  return (
    <section id="marketplace" className="section-pad bg-slate-canvas">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Marketplace Preview"
            title="Real freight. Real capacity. Live on the marketplace."
            description="A sample of what's moving right now \u2014 available trucks and open loads across major African corridors."
          />

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={cn(
                  "rounded-full border px-4 py-2 text-[13.5px] font-medium transition-colors",
                  active === f.value
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : "border-slate-line bg-white text-charcoal-light hover:border-emerald-300 hover:text-navy-900"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((listing) => (
              <motion.div
                key={listing.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <ListingCard listing={listing} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
