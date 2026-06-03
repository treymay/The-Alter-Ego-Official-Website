import { cn } from "@/lib/utils";

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
  width?: "default" | "narrow" | "wide";
};

const widths = {
  default: "max-w-7xl",
  narrow: "max-w-3xl",
  wide: "max-w-[90rem]",
};

export function PageShell({
  children,
  className,
  width = "default",
}: PageShellProps) {
  return (
    <div
      className={cn(
        "relative z-10 mx-auto px-4 pb-24 pt-32 md:px-8",
        widths[width],
        className,
      )}
    >
      {children}
    </div>
  );
}
