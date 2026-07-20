"use client";

import { motion } from "framer-motion";
import {
  RefreshCw,
  Zap,
  BadgeCheck,
  Globe2,
  Clock,
  TrendingUp,
  Network,
  Radio,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { benefits } from "@/lib/data";

const icons = [RefreshCw, Zap, BadgeCheck, Globe2, Clock, TrendingUp, Network, Radio];

export function WhyFreightAfrica() {
  return (
    <section className="section-pad bg-slate-canvas">
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Why Freight Africa"
          title="Everything your freight operation needs, in one network."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="rounded-2xl border border-slate-line bg-white p-6 shadow-card"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                  <Icon className="h-5 w-5 text-emerald-600" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-[15.5px] font-semibold text-navy-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-charcoal-light">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
