import { ReviewsExperience } from "@/components/reviews/ReviewsExperience";
import { getApprovedReviews } from "@/lib/reviews-store";

export const metadata = {
  title: "Reviews | The Alter Ego",
  description:
    "Client reviews and feedback for The Alter Ego studio — Shopify flagships and art direction.",
};

export const dynamic = "force-dynamic";

export default async function ReviewsPage() {
  const reviews = await getApprovedReviews();
  return <ReviewsExperience reviews={reviews} />;
}
