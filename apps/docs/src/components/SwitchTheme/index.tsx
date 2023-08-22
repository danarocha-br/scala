import { useTheme } from "next-themes";
import { ThemeToggle } from "@compasso/scala";
import { useEffect, useState } from "react";

export const SwitchTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeToggle
      className="p-1"
      isDark={theme === "dark"}
      onThemeChange={toggleTheme}
    />
  );
};
