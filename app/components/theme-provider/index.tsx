import { useEffect } from "react";
import { useStore } from "~/stores";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // const theme = useThemeStore((state) => state.theme);
  const theme = useStore((state) => state.theme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
}

// Hook to use theme state in components
export const useTheme = () => {
  const { theme, setTheme } = useStore();
  return { theme, setTheme };
};
