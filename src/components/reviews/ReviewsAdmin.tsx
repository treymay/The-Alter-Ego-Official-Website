"use client";

import { useEffect, useState } from "react";
import type { Review } from "@/lib/reviews";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { ReviewBubble } from "@/components/reviews/ReviewBubble";

const TOKEN_KEY = "review-admin-token";

export function ReviewsAdmin() {
  const [token, setToken] = useState("");
  const [authed, setAuthed] = useState(false);
  const [pending, setPending] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem(TOKEN_KEY);
    if (saved) {
      setToken(saved);
      void verifyAndLoad(saved, { restoreSession: true });
    }
  }, []);

  async function verifyAndLoad(
    adminToken: string,
    { restoreSession = false }: { restoreSession?: boolean } = {},
  ) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/reviews/admin", {
        headers: { "x-admin-token": adminToken },
      });
      if (res.status === 401) {
        sessionStorage.removeItem(TOKEN_KEY);
        setAuthed(false);
        setError(
          restoreSession
            ? "Session expired. Enter your admin token again."
            : "Invalid admin token. Check that it matches REVIEW_ADMIN_SECRET in Vercel.",
        );
        return false;
      }
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(
          typeof data.error === "string"
            ? data.error
            : "Could not load pending reviews.",
        );
        return false;
      }
      const data = await res.json();
      setPending(data.pending ?? []);
      setAuthed(true);
      return true;
    } catch {
      setError("Could not connect. Try again.");
      return false;
    } finally {
      setLoading(false);
    }
  }

  async function handleAction(id: string, action: "approve" | "reject") {
    const res = await fetch("/api/reviews/admin", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-admin-token": token,
      },
      body: JSON.stringify({ id, action }),
    });
    if (!res.ok) {
      setError("Action failed.");
      return;
    }
    setPending((prev) => prev.filter((r) => r.id !== id));
  }

  async function onLogin(e: React.FormEvent) {
    e.preventDefault();
    const ok = await verifyAndLoad(token);
    if (ok) sessionStorage.setItem(TOKEN_KEY, token);
  }

  if (!authed) {
    return (
      <PageShell>
        <PageHero eyebrow="Admin" title="Review moderation" />
        <GlassContainer className="mx-auto max-w-md p-8">
          <form onSubmit={onLogin} className="space-y-4">
            <label className="block">
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-ink/50">
                Admin token
              </span>
              <input
                type="password"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                required
                className="mt-2 w-full rounded-xl border border-ink/10 bg-white/60 px-4 py-3 font-body text-ink outline-none"
              />
            </label>
            {error && (
              <p className="font-body text-sm text-magenta">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-magenta py-3 font-body text-xs font-semibold uppercase tracking-widest text-white disabled:opacity-60"
            >
              {loading ? "Checking…" : "Enter"}
            </button>
          </form>
        </GlassContainer>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <PageHero
        eyebrow="Admin"
        title="Pending reviews"
        description="Approve reviews to publish them on the site, or reject to discard."
      />

      {error && <p className="mb-6 font-body text-sm text-magenta">{error}</p>}
      {loading && <p className="font-body text-sm text-ink/60">Loading…</p>}

      {!loading && pending.length === 0 && (
        <p className="font-body text-ink/60">No pending reviews right now.</p>
      )}

      <div className="space-y-8">
        {pending.map((review) => (
          <div key={review.id} className="space-y-4">
            <ReviewBubble review={review} />
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => handleAction(review.id, "approve")}
                className="rounded-full bg-brand-green px-6 py-2 font-body text-xs font-semibold uppercase tracking-widest text-ink"
              >
                Approve
              </button>
              <button
                type="button"
                onClick={() => handleAction(review.id, "reject")}
                className="rounded-full border border-ink/15 px-6 py-2 font-body text-xs font-semibold uppercase tracking-widest text-ink/70"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
