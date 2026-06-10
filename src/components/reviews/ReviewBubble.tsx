import type { Review } from "@/lib/reviews";
import { StarRating } from "@/components/reviews/StarRating";
import { cn } from "@/lib/utils";

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function ReviewBubble({
  review,
  align = "left",
}: {
  review: Review;
  align?: "left" | "right";
}) {
  return (
    <article
      className={cn(
        "relative max-w-xl rounded-2xl border border-white/60 bg-[rgba(255,255,255,0.94)] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)]",
        align === "right" ? "ml-auto" : "mr-auto",
      )}
    >
      <div
        className={cn(
          "absolute -bottom-2 h-4 w-4 rotate-45 border border-white/60 bg-[rgba(255,255,255,0.94)]",
          align === "right" ? "right-8" : "left-8",
        )}
        aria-hidden
      />
      <StarRating value={review.rating} size="sm" />
      <p className="font-body mt-4 leading-relaxed text-ink/80">{review.message}</p>
      <footer className="mt-5 border-t border-ink/8 pt-4">
        <p className="font-heading text-sm text-ink">{review.businessName}</p>
        <p className="font-body text-xs text-ink/55">{review.role}</p>
        <p className="font-body mt-2 text-[0.65rem] uppercase tracking-widest text-ink/40">
          {formatDate(review.createdAt)}
        </p>
      </footer>
    </article>
  );
}
