"use client";

import { motion } from "framer-motion";
import {
  Truck,
  PackagePlus,
  Layers,
  Globe2,
  Route,
  Users2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    icon: Truck,
    title: "Find Available Trucks",
    description: "Search live capacity by route, truck type, and departure date.",
  },
  {
    icon: PackagePlus,
    title: "Post Loads",
    description: "Publish cargo details and reach transporters along your route.",
  },
  {
    icon: Layers,
    title: "Fleet Discovery",
    description: "Surface your full fleet's capacity to businesses that need it.",
  },
  {
    icon: Globe2,
    title: "Cross-Border Freight",
    description: "Coordinate multi-country moves across regional trade blocs.",
  },
  {
    icon: Route,
    title: "Route Marketplace",
    description: "Browse active corridors and see where demand is moving.",
  },
  {
    icon: Users2,
    title: "Logistics Networking",
    description: "Connect with verified transporters, shippers, and forwarders.",
  },
];

export function PlatformSection() {
  return (
    <section className="section-pad bg-slate-canvas">
      <div className="container-page">
        <SectionHeading
          eyebrow="The Platform"
          title="One marketplace, six ways to move freight."
          description="Freight Africa brings truck availability, cargo listings, and route intelligence into a single connected ecosystem."
        />

        <div className="relative mt-14">
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            aria-hidden="true"
          >
            <line x1="16.6%" y1="18%" x2="50%" y2="18%" stroke="#C3CEE0" strokeWidth="1" strokeDasharray="3 6" />
            <line x1="50%" y1="18%" x2="83.4%" y2="18%" stroke="#C3CEE0" strokeWidth="1" strokeDasharray="3 6" />
            <line x1="16.6%" y1="82%" x2="50%" y2="82%" stroke="#C3CEE0" strokeWidth="1" strokeDasharray="3 6" />
            <line x1="50%" y1="82%" x2="83.4%" y2="82%" stroke="#C3CEE0" strokeWidth="1" strokeDasharray="3 6" />
          </svg>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="relative z-10 rounded-2xl border border-slate-line bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-freight-50 text-freight-600">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="text-[13px] font-medium text-navy-300">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[16px] font-semibold text-navy-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-charcoal-light">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
