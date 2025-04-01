import type { StateCreator } from "zustand";

export interface SystemSlice {
  testOption: boolean;
  toggleTestOption: () => void;
}

export const createSystemSlice: StateCreator<SystemSlice> = (set) => ({
  testOption: false,
  toggleTestOption: () => set((state) => ({ testOption: !state.testOption })),
});
