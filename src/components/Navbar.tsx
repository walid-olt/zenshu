import { NavLink } from "react-router";
import { Button } from "./ui/button";
import { BooksIcon, MoonIcon, SunIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { useEffect, useState } from "react";

export default function Navbar() {
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

  return (
    <nav className="px-8 py-2 flex items-center justify-between sticky top-0 z-9999 bg-background/20 backdrop-blur-2xl  shadow-[0_1px_0_0_var(--muted)] ">
      <div>
        <NavLink className={"outline-none"} to={"/"}>
          <Logo />
        </NavLink>
      </div>
      <div className="flex items-center gap-6 *:hover:bg-popover *:   *:px-2.5   *:py-1 *:rounded-(--radius)">
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(
              "text-sm transition-colors",
              isActive && "text-primary font-semibold",
            )
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            cn(
              "text-sm transition-colors",
              isActive && "text-primary font-semibold",
            )
          }
        >
          Catalog
        </NavLink>
        <NavLink
          to="/characters"
          className={({ isActive }) =>
            cn(
              "text-sm transition-colors",
              isActive && "text-primary font-semibold",
            )
          }
        >
          Characters
        </NavLink>
        <Button variant="outline" size="sm" asChild>
          <NavLink to="/library">
            <BooksIcon size={16} weight="regular" />
            My Library
          </NavLink>
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? (
            <SunIcon size={16} weight="regular" />
          ) : (
            <MoonIcon size={16} weight="regular" />
          )}
        </Button>
      </div>
    </nav>
  );
}
