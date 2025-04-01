import { create } from "zustand";
import { createThemeSlice, type ThemeSlice } from "./slices/theme";
import { createSystemSlice, type SystemSlice } from "./slices/system";

export const useStore = create<ThemeSlice & SystemSlice>((...a) => ({
  ...createThemeSlice(...a),
  ...createSystemSlice(...a),
}));
