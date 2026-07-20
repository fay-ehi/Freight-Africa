"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

// TODO: Replace with your Formspree endpoint, e.g. https://formspree.io/f/xxxxabcd
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const userTypes = [
  "Driver",
  "Fleet Owner",
  "Business",
  "Logistics Company",
  "Freight Forwarder",
  "Manufacturer",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-[14.5px] text-navy-900 placeholder:text-navy-300 transition-colors focus:border-emerald-400 focus:outline-none";

export function WaitlistSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="waitlist" className="section-pad bg-white">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Join the Waitlist"
              title="Be first on the marketplace when your region goes live."
              description="Tell us a bit about you and we'll reach out as Freight Africa opens up truck availability and load posting in your corridor."
            />

            <div className="mt-10 space-y-4">
              {[
                "Early access before public launch",
                "Priority verification for your account",
                "First look at pricing and onboarding",
              ].map((line) => (
                <div key={line} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <p className="text-[14.5px] text-charcoal-light">{line}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-line bg-slate-canvas p-6 sm:p-9">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex h-full min-h-[380px] flex-col items-center justify-center text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                  <CheckCircle2 className="h-7 w-7 text-emerald-600" />
                </span>
                <h3 className="mt-5 text-[19px] font-semibold text-navy-900">
                  You&apos;re on the list
                </h3>
                <p className="mt-2 max-w-sm text-[14.5px] text-charcoal-light">
                  We&apos;ll email you as soon as Freight Africa opens up in your
                  region.
                </p>
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  className="mt-6"
                  onClick={() => setStatus("idle")}
                >
                  Submit another response
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-[13px] font-medium text-navy-700">
                      Full Name
                    </label>
                    <input id="name" name="name" required className={inputClasses} placeholder="Amara Okafor" />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-[13px] font-medium text-navy-700">
                      Company
                    </label>
                    <input id="company" name="company" className={inputClasses} placeholder="Okafor Logistics" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-navy-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClasses}
                    placeholder="you@company.com"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-[13px] font-medium text-navy-700">
                      Phone Number
                    </label>
                    <input id="phone" name="phone" type="tel" className={inputClasses} placeholder="+234 800 000 0000" />
                  </div>
                  <div>
                    <label htmlFor="country" className="mb-1.5 block text-[13px] font-medium text-navy-700">
                      Country
                    </label>
                    <input id="country" name="country" required className={inputClasses} placeholder="Nigeria" />
                  </div>
                </div>

                <div>
                  <label htmlFor="userType" className="mb-1.5 block text-[13px] font-medium text-navy-700">
                    I am a...
                  </label>
                  <select id="userType" name="userType" required className={inputClasses} defaultValue="">
                    <option value="" disabled>
                      Select an option
                    </option>
                    {userTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === "submitting"}>
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting
                    </>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>

                {status === "error" && (
                  <p className="text-center text-[13px] text-accent-600">
                    Something went wrong. Please check the form endpoint and try again.
                  </p>
                )}

                <p className="text-center text-[12px] text-charcoal-light/80">
                  Submissions are sent via Formspree. Add your endpoint in{" "}
                  <code className="rounded bg-slate-panel px-1 py-0.5">
                    components/WaitlistSection.tsx
                  </code>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
