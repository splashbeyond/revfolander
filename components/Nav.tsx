"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Flywheel", href: "#flywheel" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav
        aria-label="Primary"
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-16 transition-[background,backdrop-filter,border-color] duration-200 ease-out border-b",
          scrolled
            ? "bg-[rgba(10,10,11,0.7)] backdrop-blur-[12px] backdrop-saturate-150 border-[var(--color-border-dark-2)]"
            : "border-transparent",
        )}
      >
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between gap-8 px-6 md:px-10 lg:px-12">
          <a href="#" className="flex items-center" aria-label="Revfo home">
            <Logo />
          </a>

          <ul className="hidden items-center gap-7 lg:flex" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[var(--color-mist)] transition-colors duration-100 [@media(hover:hover)]:hover:text-[var(--color-paper)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              variant="ghost"
              href="#"
              className="h-10 px-4 text-sm"
              size="md"
            >
              Sign in
            </Button>
            <Button
              variant="primary"
              href="#pricing"
              className="h-10 px-4 text-sm"
              size="md"
            >
              Get started
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] text-[var(--color-paper)] lg:hidden"
          >
            <Menu className="h-[22px] w-[22px]" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-[2px]"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-[60] flex w-[min(360px,90vw)] flex-col gap-6 border-l border-[var(--color-border-dark)] bg-[var(--color-shadow)] px-6 pt-20 pb-8"
              aria-label="Mobile menu"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-[10px] text-[var(--color-mist)]"
              >
                <X className="h-[22px] w-[22px]" />
              </button>

              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-[var(--color-border-dark)] py-2 text-lg text-[var(--color-paper)]"
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 text-[var(--color-mist)]" />
                </a>
              ))}

              <div className="mt-auto flex flex-col gap-3">
                <Button variant="ghost" href="#" size="md">
                  Sign in
                </Button>
                <Button variant="primary" href="#pricing" size="md">
                  Get started
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
