"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RouteMap } from "@/components/ui/RouteMap";
import { regions } from "@/lib/data";

export function AfricaCoverage() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Continental Coverage"
              title="Built for every major freight corridor."
              description="Freight Africa is expanding region by region, connecting the trade blocs that already move the continent's goods."
            />

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {regions.map((region, i) => (
                <motion.div
                  key={region.code}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-xl border border-slate-line bg-slate-canvas p-4"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-[14.5px] font-semibold text-navy-900">
                      {region.name}
                    </h4>
                    <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-[11px] font-medium text-white">
                      {region.code}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-charcoal-light">
                    {region.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-[420/460] w-full max-w-[420px] rounded-3xl border border-slate-line bg-slate-canvas p-6">
            <RouteMap className="h-full w-full" variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
