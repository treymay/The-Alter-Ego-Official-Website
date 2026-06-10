import { NextResponse } from "next/server";
import { submitReview } from "@/lib/reviews-store";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const rating = Number(body.rating);
    const businessName = String(body.businessName ?? "").trim();
    const role = String(body.role ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Rating must be 1–5." }, { status: 400 });
    }
    if (!businessName || !role || !message) {
      return NextResponse.json(
        { error: "Business name, role, and message are required." },
        { status: 400 },
      );
    }
    if (message.length > 2000) {
      return NextResponse.json({ error: "Message is too long." }, { status: 400 });
    }

    await submitReview({ rating, businessName, role, message });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Could not submit review." }, { status: 500 });
  }
}
