import { SunIcon, MoonIcon } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

function ThemeSwitcher() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));


  return (<Button
          variant="outline"
          size="icon-lg"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <SunIcon size={16} weight="regular" />
          ) : (
            <MoonIcon size={16} weight="regular" />
          )}
        </Button>)
}

export default ThemeSwitcher
