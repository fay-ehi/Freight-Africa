"use client";

import { motion } from "framer-motion";
import { ArrowRight, Truck, ShieldCheck, MapPin } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { RouteMap } from "@/components/ui/RouteMap";

const floatCards = [
  {
    label: "Flatbed \u00b7 30T",
    sub: "Lagos \u2192 Accra",
    icon: Truck,
    className: "left-[2%] top-[18%] sm:left-[4%]",
    delay: 0,
  },
  {
    label: "Verified Transporter",
    sub: "1,200+ listings tracked",
    icon: ShieldCheck,
    className: "right-[0%] top-[6%] sm:right-[2%]",
    delay: 0.6,
  },
  {
    label: "Fresh Produce \u00b7 18T",
    sub: "Nairobi \u2192 Kampala",
    icon: MapPin,
    className: "right-[2%] bottom-[10%] sm:right-[6%]",
    delay: 1.1,
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-900 pb-16 pt-32 sm:pb-24 sm:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-navy-radial" />
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-balance mt-6 text-[40px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[56px]"
            >
              Connecting available trucks with freight, across Africa.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-balance mt-6 max-w-xl text-[17px] leading-relaxed text-white/65"
            >
              Post available trucks, publish loads, and match cargo with
              capacity across every major freight corridor \u2014 from Lagos to
              Nairobi, Durban to Casablanca.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <LinkButton href="#marketplace" variant="primary" size="lg">
                Find Transport
                <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <LinkButton href="#waitlist" variant="outlineLight" size="lg">
                Post Available Truck
              </LinkButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-7 text-[13px] text-white/50"
            >
              <span>Built for ECOWAS, SADC &amp; COMESA corridors</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
              <span>Verified drivers &amp; businesses</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
              <span>Cross-border ready</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto aspect-[420/460] w-full max-w-[440px]"
          >
            <RouteMap className="h-full w-full" variant="dark" />

            {floatCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: card.delay,
                  }}
                  className={`glass-panel absolute hidden w-[168px] rounded-xl px-3.5 py-3 shadow-glow sm:block ${card.className}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                      <Icon className="h-3.5 w-3.5 text-freight-300" strokeWidth={2} />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[12.5px] font-semibold text-white">
                        {card.label}
                      </p>
                      <p className="truncate text-[11px] text-white/55">{card.sub}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
