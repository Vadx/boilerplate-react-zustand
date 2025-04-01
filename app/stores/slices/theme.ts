import type { StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "dark" | "light" | "system";

export interface ThemeSlice {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const createThemeSlice: StateCreator<
  ThemeSlice,
  [],
  [["zustand/persist", ThemeSlice]]
> = persist(
  (set) => ({
    theme: "system", // default theme
    setTheme: (newTheme) => set({ theme: newTheme }),
    toggleTheme: () =>
      set((state) => ({
        theme: state.theme === "light" ? "dark" : "light",
      })),
  }),
  {
    name: "theme-storage", // name of the storage key
  },
);
