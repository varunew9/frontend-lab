export type Theme = "dark" | "light" | "forest" | "cyberpunk" | "ocean" | "synthwave" | "matrix" | "midnight";
export interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
