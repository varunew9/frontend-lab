import { Sun, Moon, TreePine, Sparkles, Waves, Radio, Binary, Stars } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "../../../components/ui";
import { useThemeStore } from "../themeChanger.store";
import type { Theme } from "../themeChanger.type";

const themeConfig: Record<
  Theme,
  {
    icon: LucideIcon;
    label: string;
  }
> = {
  midnight: {
    icon: Stars,
    label: "Midnight",
  },
  dark: {
    icon: Moon,
    label: "Dark",
  },

  light: {
    icon: Sun,
    label: "Light",
  },

  forest: {
    icon: TreePine,
    label: "Forest",
  },

  cyberpunk: {
    icon: Sparkles,
    label: "Cyberpunk",
  },

  ocean: {
    icon: Waves,
    label: "Ocean",
  },

  synthwave: {
    icon: Radio,
    label: "Synthwave",
  },

  matrix: {
    icon: Binary,
    label: "Matrix",
  },
};

export function ThemeChanger() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  return (
    <div className="row justify-center gap-4">
      {(Object.keys(themeConfig) as Theme[]).map((key) => {
        const { icon: OptionIcon, label } = themeConfig[key];
        const isActive = theme === key;

        return (
          <Button key={key} id={`btn-${key}`} aria-label={`Switch to ${label} theme`} aria-pressed={isActive} onClick={() => setTheme(key)} variant={isActive ? "primary" : "outline"} className="col col-3">
            <OptionIcon size={16} aria-hidden="true" />
            <span>{label}</span>
          </Button>
        );
      })}
    </div>
  );
}
