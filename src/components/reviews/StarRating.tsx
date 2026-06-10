"use client";

import { cn } from "@/lib/utils";

type Props = {
  value: number;
  onChange?: (value: number) => void;
  size?: "sm" | "md";
};

export function StarRating({ value, onChange, size = "md" }: Props) {
  const interactive = !!onChange;
  const starSize = size === "sm" ? "text-base" : "text-xl";

  return (
    <div
      className="flex gap-1"
      role={interactive ? "radiogroup" : "img"}
      aria-label={`${value} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!interactive}
          onClick={() => onChange?.(star)}
          className={cn(
            starSize,
            "leading-none transition",
            interactive && "cursor-pointer hover:scale-110",
            !interactive && "cursor-default",
            star <= value ? "text-brand-yellow" : "text-ink/20",
          )}
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
        >
          ★
        </button>
      ))}
    </div>
  );
}
