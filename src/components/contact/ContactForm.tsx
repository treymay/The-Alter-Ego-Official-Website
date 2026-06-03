"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBrandStore } from "@/store/useBrandStore";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { cn } from "@/lib/utils";

const fields = [
  { id: "name", label: "Name", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "company", label: "Brand / Company", type: "text" },
  { id: "details", label: "Project Details", type: "textarea" },
] as const;

export function ContactForm() {
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const setCelebration = useBrandStore((s) => s.setContactCelebration);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
    setCelebration(true);
    setTimeout(() => setCelebration(false), 4000);
  }

  return (
    <>
      <form onSubmit={onSubmit} className="mt-12 space-y-6">
        {fields.map((field) => (
          <GlassContainer
            key={field.id}
            className={cn(
              "p-1 transition-shadow",
              focused === field.id && "ring-2 ring-brand-pink/50",
            )}
          >
            <label
              htmlFor={field.id}
              className={cn(
                "block px-4 pt-3 font-body text-xs font-semibold uppercase tracking-widest transition",
                focused === field.id ? "text-magenta" : "text-ink/45",
              )}
            >
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.id}
                name={field.id}
                rows={5}
                required
                onFocus={() => setFocused(field.id)}
                onBlur={() => setFocused(null)}
                className="w-full resize-none bg-transparent px-4 pb-4 font-body text-ink outline-none"
              />
            ) : (
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                required
                onFocus={() => setFocused(field.id)}
                onBlur={() => setFocused(null)}
                className="w-full bg-transparent px-4 pb-4 font-body text-ink outline-none"
              />
            )}
          </GlassContainer>
        ))}

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 120, damping: 24 }}
          className="w-full rounded-full bg-magenta py-4 font-body text-xs font-semibold uppercase tracking-[0.3em] text-white"
        >
          Send Message
        </motion.button>
      </form>

      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-8 text-center"
          >
            <p className="font-heading text-magenta">Message sent.</p>
            <p className="font-body mt-2 text-sm text-ink/70">
              We&apos;ll reply with next steps.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
