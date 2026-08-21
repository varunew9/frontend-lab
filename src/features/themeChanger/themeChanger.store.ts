import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ThemeState } from "./themeChanger.type";

const getInitialTheme = (): ThemeState["theme"] => {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const applyTheme = (theme: ThemeState["theme"]) => {
  document.documentElement.setAttribute("data-theme", theme);
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: getInitialTheme(),

      setTheme: (theme) => {
        set({ theme });
      },
    }),
    {
      name: "theme",
    },
  ),
);

if (typeof window !== "undefined") {
  // Apply persisted/initial theme immediately.
  applyTheme(useThemeStore.getState().theme);

  // Keep <html data-theme=""> synchronized with Zustand.
  useThemeStore.subscribe((state) => {
    applyTheme(state.theme);
  });

  // Synchronize theme changes between browser tabs.
  window.addEventListener("storage", (event) => {
    if (event.key !== "theme" || !event.newValue) {
      return;
    }

    try {
      const parsed = JSON.parse(event.newValue);
      const theme = parsed?.state?.theme;

      if (theme) {
        useThemeStore.getState().setTheme(theme);
      }
    } catch {
      // Ignore invalid localStorage data.
    }
  });
}
