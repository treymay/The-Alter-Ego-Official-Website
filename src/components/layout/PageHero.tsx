import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  size?: "default" | "large";
};

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  size = "default",
}: PageHeroProps) {
  return (
    <header className={cn("relative mb-16 md:mb-20", className)}>
      <div className="mb-6 h-1 w-full max-w-md rounded-full bg-gradient-to-r from-brand-orange via-brand-pink to-brand-green" />
      <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-magenta">
        {eyebrow}
      </p>
      <h1
        className={cn(
          "font-display mt-4 text-ink",
          size === "large" && "max-w-4xl",
        )}
      >
        {title}
      </h1>
      {description && (
        <p className="font-body mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
          {description}
        </p>
      )}
    </header>
  );
}
