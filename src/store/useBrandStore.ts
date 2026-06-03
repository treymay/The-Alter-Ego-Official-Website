import { create } from "zustand";

export type ServiceEnergy = "shopify" | "art-direction" | null;

type BrandState = {
  metamorphosis: number;
  blogMode: boolean;
  contactCelebration: boolean;
  serviceEnergy: ServiceEnergy;
  mouse: { x: number; y: number };
  setMetamorphosis: (v: number) => void;
  setBlogMode: (v: boolean) => void;
  setContactCelebration: (v: boolean) => void;
  setServiceEnergy: (v: ServiceEnergy) => void;
  setMouse: (x: number, y: number) => void;
};

export const useBrandStore = create<BrandState>((set) => ({
  metamorphosis: 0,
  blogMode: false,
  contactCelebration: false,
  serviceEnergy: null,
  mouse: { x: 0.5, y: 0.5 },
  setMetamorphosis: (metamorphosis) => set({ metamorphosis }),
  setBlogMode: (blogMode) => set({ blogMode }),
  setContactCelebration: (contactCelebration) => set({ contactCelebration }),
  setServiceEnergy: (serviceEnergy) => set({ serviceEnergy }),
  setMouse: (x, y) => set({ mouse: { x, y } }),
}));
