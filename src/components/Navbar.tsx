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
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-background/85 px-8 py-2 shadow-[0_1px_0_0_var(--muted)] backdrop-blur-2xl">
      <div>
        <NavLink className={"outline-none"} to={"/"}>
          <Logo />
        </NavLink>
      </div>
      <div className="flex items-center gap-6 *:rounded-(--radius) *:px-2.5 *:py-1 *:hover:bg-popover">
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
        <Button disabled title="comming soon" variant={"link"}>
          Characters
        </Button>
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
