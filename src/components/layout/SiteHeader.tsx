"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/40 bg-[rgba(249,249,246,0.88)] px-5 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
        aria-label="Main"
      >
        <Link href="/" aria-label="The Alter Ego — Home" className="shrink-0">
          <Image
            src="/images/logo-icon.png"
            alt="The Alter Ego Creative Studio"
            width={1024}
            height={1024}
            priority
            unoptimized
            className="h-9 w-9 md:h-10 md:w-10"
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {BRAND.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "font-body text-xs font-semibold uppercase tracking-[0.2em] transition-colors",
                  pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href))
                    ? "text-magenta"
                    : "text-ink/70 hover:text-magenta",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="font-body text-xs font-semibold uppercase tracking-widest text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          Menu
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: "spring", stiffness: 120, damping: 24, mass: 1.2 }}
            className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/25 bg-[rgba(249,249,246,0.92)] p-4 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {BRAND.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-body text-sm font-semibold uppercase tracking-widest text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
