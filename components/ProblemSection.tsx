"use client";

import { motion } from "framer-motion";
import { PackageX, Search, Network, PhoneCall, Globe2, Gauge } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const problems = [
  {
    icon: PackageX,
    title: "Empty Return Trips",
    description: "Trucks travel back with no load, wasting capacity and fuel every day.",
  },
  {
    icon: Search,
    title: "Hard to Find Available Trucks",
    description: "Businesses spend hours calling around instead of seeing what's available.",
  },
  {
    icon: Network,
    title: "Fragmented Transport Networks",
    description: "Transporters and shippers operate in disconnected local circles.",
  },
  {
    icon: PhoneCall,
    title: "Manual Freight Sourcing",
    description: "Freight is still coordinated over phone calls and word of mouth.",
  },
  {
    icon: Globe2,
    title: "Cross-Border Coordination",
    description: "Moving goods between countries adds friction with little visibility.",
  },
  {
    icon: Gauge,
    title: "Underutilized Fleet Capacity",
    description: "Owned trucks sit idle instead of generating consistent revenue.",
  },
];

export function ProblemSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="The Problem"
          title="Africa moves enormous freight volumes \u2014 with very little visibility."
          description="Trucks and cargo exist across the continent every day. The challenge has never been supply or demand \u2014 it's connecting the two, efficiently."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="rounded-2xl border border-slate-line bg-slate-canvas p-6 transition-colors hover:border-navy-200 hover:bg-white hover:shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900">
                  <Icon className="h-5 w-5 text-freight-400" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-[16px] font-semibold text-navy-900">
                  {problem.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-charcoal-light">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
