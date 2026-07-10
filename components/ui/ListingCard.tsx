"use client";

import { motion } from "framer-motion";
import { Truck, Package, Container, Wheat, MapPin, ArrowRight } from "lucide-react";
import { MarketplaceListing } from "@/lib/data";
import { cn } from "@/lib/utils";

const typeIcon = {
  truck: Truck,
  cargo: Package,
  container: Container,
  agriculture: Wheat,
};

const typeColor = {
  truck: "bg-freight-50 text-freight-600",
  cargo: "bg-accent-50 text-accent-600",
  container: "bg-navy-100 text-navy-700",
  agriculture: "bg-emerald-50 text-emerald-600",
};

const statusColor: Record<string, string> = {
  "Available Tomorrow": "bg-freight-50 text-freight-700",
  "Available Now": "bg-emerald-50 text-emerald-700",
  "Urgent Delivery": "bg-accent-50 text-accent-700",
  "Booking Open": "bg-navy-100 text-navy-700",
};

export function ListingCard({ listing }: { listing: MarketplaceListing }) {
  const Icon = typeIcon[listing.type];

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group flex h-full flex-col rounded-2xl border border-slate-line bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover"
    >
      <div className="flex items-start justify-between">
        <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl", typeColor[listing.type])}>
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <span
          className={cn(
            "rounded-full px-2.5 py-1 text-[12px] font-medium",
            statusColor[listing.status]
          )}
        >
          {listing.status}
        </span>
      </div>

      <h3 className="mt-4 text-[16px] font-semibold text-navy-900">{listing.title}</h3>

      <div className="mt-1.5 flex items-center gap-1.5 text-[14px] text-charcoal-light">
        <MapPin className="h-3.5 w-3.5 shrink-0" />
        <span>{listing.route}</span>
      </div>

      <ul className="mt-4 space-y-1.5 border-t border-slate-line pt-4 text-[13px] text-charcoal-light">
        {listing.detailLines.map((line) => (
          <li key={line} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-navy-300" />
            {line}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {listing.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-slate-panel px-2 py-0.5 text-[12px] font-medium text-navy-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <button className="mt-5 flex items-center justify-between rounded-xl border border-navy-200 px-3.5 py-2.5 text-[13px] font-semibold text-navy-800 transition-colors group-hover:border-freight-300 group-hover:bg-freight-50 group-hover:text-freight-700">
        {listing.ctaLabel}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </button>
    </motion.div>
  );
}
