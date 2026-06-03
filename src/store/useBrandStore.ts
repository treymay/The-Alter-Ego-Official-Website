import { create } from "zustand";

type BrandState = {
  metamorphosis: number;
  blogMode: boolean;
  contactCelebration: boolean;
  mouse: { x: number; y: number };
  setMetamorphosis: (v: number) => void;
  setBlogMode: (v: boolean) => void;
  setContactCelebration: (v: boolean) => void;
  setMouse: (x: number, y: number) => void;
};

export const useBrandStore = create<BrandState>((set) => ({
  metamorphosis: 0,
  blogMode: false,
  contactCelebration: false,
  mouse: { x: 0.5, y: 0.5 },
  setMetamorphosis: (metamorphosis) => set({ metamorphosis }),
  setBlogMode: (blogMode) => set({ blogMode }),
  setContactCelebration: (contactCelebration) => set({ contactCelebration }),
  setMouse: (x, y) => set({ mouse: { x, y } }),
}));
