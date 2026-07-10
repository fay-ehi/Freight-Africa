"use client";

import { FormEvent, useState } from "react";
import { Compass, Facebook, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/data";

const social = [
  { icon: Twitter, label: "Twitter / X", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer id="footer" className="bg-navy-950 pt-16 text-white/70">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_1fr_1fr_1.3fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <Compass className="h-5 w-5 text-freight-400" strokeWidth={2} />
              </span>
              <span className="text-[17px] font-semibold text-white">Freight Africa</span>
            </div>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-white/50">
              Building Africa&apos;s connected freight and logistics network.
            </p>
            <div className="mt-6 flex gap-3">
              {social.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:border-white/25 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wide text-white/40">
              Navigate
            </p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[14px] text-white/60 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wide text-white/40">
              Company
            </p>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-[14px] text-white/60 hover:text-white">About</a></li>
              <li><a href="#faq" className="text-[14px] text-white/60 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-[14px] text-white/60 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-[14px] text-white/60 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wide text-white/40">
              Stay Updated
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-white/50">
              Get freight corridor updates and launch news in your inbox.
            </p>
            {subscribed ? (
              <p className="mt-4 text-[14px] font-medium text-emerald-400">
                Thanks \u2014 you&apos;re subscribed.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full min-w-0 rounded-xl border border-white/15 bg-white/[0.06] px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/35 focus:border-freight-400 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl bg-freight-500 text-white transition-colors hover:bg-freight-600"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-7 text-[13px] text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Freight Africa. All rights reserved.</p>
          <p>Africa&apos;s largest digital freight marketplace \u2014 in progress.</p>
        </div>
      </div>
    </footer>
  );
}
