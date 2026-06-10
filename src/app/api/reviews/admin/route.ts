import { NextResponse } from "next/server";
import {
  approveReview,
  getPendingReviews,
  isAdminConfigured,
  rejectReview,
  verifyAdminToken,
} from "@/lib/reviews-store";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function adminNotConfigured() {
  return NextResponse.json(
    { error: "Admin is not configured. Set REVIEW_ADMIN_SECRET in Vercel." },
    { status: 503 },
  );
}

export async function GET(request: Request) {
  if (!isAdminConfigured()) return adminNotConfigured();
  const token = request.headers.get("x-admin-token");
  if (!verifyAdminToken(token)) return unauthorized();
  const pending = await getPendingReviews();
  return NextResponse.json({ pending });
}

export async function PATCH(request: Request) {
  if (!isAdminConfigured()) return adminNotConfigured();
  const token = request.headers.get("x-admin-token");
  if (!verifyAdminToken(token)) return unauthorized();

  try {
    const { id, action } = await request.json();
    if (!id || (action !== "approve" && action !== "reject")) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    if (action === "approve") {
      const review = await approveReview(id);
      if (!review) {
        return NextResponse.json({ error: "Review not found." }, { status: 404 });
      }
      return NextResponse.json({ ok: true, review });
    }

    const removed = await rejectReview(id);
    if (!removed) {
      return NextResponse.json({ error: "Review not found." }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Could not update review." }, { status: 500 });
  }
}
