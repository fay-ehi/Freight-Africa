"use client";

import { motion } from "framer-motion";
import { Truck, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { transporterSteps, businessSteps, type ProcessStep } from "@/lib/data";
import { cn } from "@/lib/utils";

function StepList({
  steps,
  accent = "emerald",
}: {
  steps: ProcessStep[];
  accent?: "emerald" | "accent";
}) {
  return (
    <ol className="relative mt-8 space-y-8">
      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-slate-line" aria-hidden="true" />
      {steps.map((step, i) => (
        <motion.li
          key={step.title}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className="relative flex gap-5"
        >
          <span
            className={cn(
              "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 bg-white text-[14px] font-semibold",
              accent === "emerald"
                ? "border-emerald-500 text-emerald-600"
                : "border-accent-500 text-accent-600"
            )}
          >
            {i + 1}
          </span>
          <div className="pt-1.5">
            <h4 className="text-[16px] font-semibold text-navy-900">{step.title}</h4>
            <p className="mt-1 text-[14.5px] leading-relaxed text-charcoal-light">
              {step.description}
            </p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple flow for both sides of the marketplace."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-3xl border border-slate-line bg-slate-canvas p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
                <Truck className="h-5 w-5 text-emerald-600" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-[13px] font-medium uppercase tracking-wide text-navy-400">
                  For Transporters
                </p>
                <p className="text-[17px] font-semibold text-navy-900">
                  Turn capacity into revenue
                </p>
              </div>
            </div>
            <StepList steps={transporterSteps} accent="emerald" />
          </div>

          <div className="rounded-3xl border border-slate-line bg-slate-canvas p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50">
                <Building2 className="h-5 w-5 text-accent-600" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-[13px] font-medium uppercase tracking-wide text-navy-400">
                  For Businesses
                </p>
                <p className="text-[17px] font-semibold text-navy-900">
                  Move cargo with confidence
                </p>
              </div>
            </div>
            <StepList steps={businessSteps} accent="accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
