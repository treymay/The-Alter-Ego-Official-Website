"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useBrandStore } from "@/store/useBrandStore";

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const setBlogMode = useBrandStore((s) => s.setBlogMode);
  const setMetamorphosis = useBrandStore((s) => s.setMetamorphosis);

  useEffect(() => {
    const isCalmPage = pathname.startsWith("/reviews");
    const isHome = pathname === "/";
    setBlogMode(isCalmPage);
    if (!isHome) {
      setMetamorphosis(isCalmPage ? 0 : 0.72);
    }
  }, [pathname, setBlogMode, setMetamorphosis]);

  return <>{children}</>;
}
