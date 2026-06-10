import type { Review } from "@/lib/reviews";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { ReviewBubble } from "@/components/reviews/ReviewBubble";
import { ReviewForm } from "@/components/reviews/ReviewForm";

export function ReviewsExperience({ reviews }: { reviews: Review[] }) {
  return (
    <PageShell>
      <PageHero
        eyebrow="Reviews"
        title="Client voices"
        description="I appreciate your feedback and understand that it's the only way to grow."
      />

      <section className="space-y-6">
        {reviews.length === 0 ? (
          <p className="font-body text-ink/60">
            No published reviews yet — be the first to share your experience.
          </p>
        ) : (
          reviews.map((review, i) => (
            <ReviewBubble
              key={review.id}
              review={review}
              align={i % 2 === 0 ? "left" : "right"}
            />
          ))
        )}
      </section>

      <section className="mt-16 max-w-2xl">
        <ReviewForm />
      </section>
    </PageShell>
  );
}
