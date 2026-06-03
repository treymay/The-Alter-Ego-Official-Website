import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && (
        <p className="font-body text-xs font-medium uppercase tracking-[0.25em] text-magenta">
          {eyebrow}
        </p>
      )}
      <h2 className={cn("font-display mt-3 text-ink", titleClassName)}>{title}</h2>
      {description && (
        <p className="font-body mt-4 text-base leading-relaxed text-ink/75 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
