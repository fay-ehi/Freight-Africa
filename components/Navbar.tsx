"use client";

import { useEffect, useState } from "react";
import { Menu, X, Compass } from "lucide-react";
import { navLinks } from "@/lib/data";
import { LinkButton } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy-100 bg-white/80 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page flex h-[72px] items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50">
            <Compass className="h-5 w-5 text-emerald-600" strokeWidth={2} />
          </span>
          <span className="text-[17px] font-semibold tracking-tight text-navy-900">
            Freight Africa
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-[14px] font-medium text-charcoal-light transition-colors hover:bg-navy-50 hover:text-navy-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <LinkButton href="#waitlist" variant="primary" size="md">
            Join Waitlist
          </LinkButton>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-800 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-navy-100 bg-white px-5 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-navy-800 hover:bg-navy-50"
              >
                {link.label}
              </a>
            ))}
          </div>
          <LinkButton
            href="#waitlist"
            variant="primary"
            size="md"
            onClick={() => setOpen(false)}
            className="mt-3 w-full"
          >
            Join Waitlist
          </LinkButton>
        </div>
      )}
    </header>
  );
}
