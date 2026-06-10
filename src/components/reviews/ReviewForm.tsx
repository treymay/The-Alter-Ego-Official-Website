"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { StarRating } from "@/components/reviews/StarRating";

export function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (rating < 1) {
      setError("Please select a star rating.");
      return;
    }

    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const payload = {
      rating,
      businessName: form.get("businessName"),
      role: form.get("role"),
      message: form.get("message"),
    };

    setSubmitting(true);
    try {
      const res = await fetch("/api/reviews/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Submission failed.");
      setSent(true);
      formEl.reset();
      setRating(0);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <GlassContainer className="p-6 md:p-8">
      <p className="font-body text-xs font-semibold uppercase tracking-widest text-magenta">
        Leave a review
      </p>
      <p className="font-body mt-2 text-sm text-ink/65">
        Submissions are reviewed before they appear on this page.
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-5">
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-ink/50">
            Your rating
          </p>
          <div className="mt-2">
            <StarRating value={rating} onChange={setRating} />
          </div>
        </div>

        <label className="block">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-ink/50">
            Business name
          </span>
          <input
            name="businessName"
            required
            maxLength={120}
            className="mt-2 w-full rounded-xl border border-ink/10 bg-white/60 px-4 py-3 font-body text-ink outline-none focus:border-magenta/40"
            placeholder="Brand or company"
          />
        </label>

        <label className="block">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-ink/50">
            Your role
          </span>
          <input
            name="role"
            required
            maxLength={80}
            className="mt-2 w-full rounded-xl border border-ink/10 bg-white/60 px-4 py-3 font-body text-ink outline-none focus:border-magenta/40"
            placeholder="Founder, Creative Director, etc."
          />
        </label>

        <label className="block">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-ink/50">
            Your message
          </span>
          <textarea
            name="message"
            required
            rows={5}
            maxLength={2000}
            className="mt-2 w-full resize-none rounded-xl border border-ink/10 bg-white/60 px-4 py-3 font-body text-ink outline-none focus:border-magenta/40"
            placeholder="What was it like working together?"
          />
        </label>

        {error && (
          <p className="font-body text-sm text-magenta">{error}</p>
        )}

        <motion.button
          type="submit"
          disabled={submitting}
          whileHover={{ scale: submitting ? 1 : 1.02 }}
          whileTap={{ scale: submitting ? 1 : 0.98 }}
          transition={{ type: "spring", stiffness: 120, damping: 24 }}
          className="w-full rounded-full bg-magenta py-4 font-body text-xs font-semibold uppercase tracking-[0.3em] text-white disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Submit review"}
        </motion.button>
      </form>

      <AnimatePresence>
        {sent && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 text-center font-body text-sm text-ink/70"
          >
            Thank you — your review is pending approval.
          </motion.p>
        )}
      </AnimatePresence>
    </GlassContainer>
  );
}
