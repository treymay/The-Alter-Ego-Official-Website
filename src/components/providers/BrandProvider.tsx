"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useBrandStore } from "@/store/useBrandStore";

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const setBlogMode = useBrandStore((s) => s.setBlogMode);
  const setMetamorphosis = useBrandStore((s) => s.setMetamorphosis);

  useEffect(() => {
    const isBlog = pathname.startsWith("/blog");
    const isHome = pathname === "/";
    setBlogMode(isBlog);
    if (!isHome) {
      setMetamorphosis(isBlog ? 0 : 0.72);
    }
  }, [pathname, setBlogMode, setMetamorphosis]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      useBrandStore
        .getState()
        .setMouse(e.clientX / window.innerWidth, e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <>{children}</>;
}
