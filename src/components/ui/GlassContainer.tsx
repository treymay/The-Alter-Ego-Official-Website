import { cn } from "@/lib/utils";

type GlassContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
  /** Softer panels on blog; default is high-contrast frosted glass */
  subtle?: boolean;
};

export function GlassContainer({
  children,
  className,
  as: Tag = "div",
  subtle = false,
}: GlassContainerProps) {
  return (
    <Tag
      className={cn(
        subtle
          ? "rounded-2xl border border-white/25 bg-[rgba(249,249,246,0.2)] shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] backdrop-blur-[32px] backdrop-saturate-[180%]"
          : "rounded-2xl border border-white/70 bg-[rgba(255,255,255,0.88)] shadow-[0_12px_48px_0_rgba(26,26,24,0.14)] backdrop-blur-[40px] backdrop-saturate-[200%]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
