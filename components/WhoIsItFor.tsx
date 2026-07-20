"use client";

import { motion } from "framer-motion";
import {
  Truck,
  Layers,
  Network,
  Factory,
  Sprout,
  ArrowUpRight,
  ArrowDownLeft,
  Route,
  Store,
  HardHat,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personas } from "@/lib/data";

const icons = [
  Truck,
  Layers,
  Network,
  Factory,
  Sprout,
  ArrowUpRight,
  ArrowDownLeft,
  Route,
  Store,
  HardHat,
];

export function WhoIsItFor() {
  return (
    <section className="section-pad bg-slate-canvas">
      <div className="container-page">
        <SectionHeading
          eyebrow="Who It's For"
          title="Built for everyone who moves or ships freight."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {personas.map((persona, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={persona.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.06 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-slate-line bg-white px-4 py-7 text-center shadow-soft transition-shadow hover:shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <p className="text-[14px] font-semibold leading-snug text-navy-900">
                  {persona.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
