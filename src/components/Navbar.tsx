import { NavLink } from "react-router";
import { Button } from "./ui/button";
import { BooksIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="px-8 py-2 flex items-center justify-between">
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
      </div>
    </nav>
  );
}
