import { NavLink } from "react-router";
import { Button } from "./ui/button";
import { BooksIcon, } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";
import Menu from "./NavMenu";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  return (
    <Menu>
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-background/85 px-2 lg:px-8 py-2 shadow-[0_1px_0_0_var(--muted)] backdrop-blur-2xl">
      <div>
        <NavLink className={"outline-none"} to={"/"}>
          <Logo />
        </NavLink>
      </div>
      <div className="items-center gap-6 *:rounded-(--radius) *:px-2.5 *:py-1 *:hover:bg-popover hidden lg:flex">
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
      </div>
      
      
<div className="flex gap-x-2">

        <ThemeSwitcher/>
      <Menu.Trigger className="md:hidden"/>
        </div>
    </nav>
      <Menu.Content>
 <div className="flex items-center justify-between *:rounded-(--radius)  p-2 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(
              "text-md transition-colors",
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
              "text-md transition-colors",
              isActive && "text-primary font-semibold",
            )
          }
        >
          Catalog
        </NavLink>
        <Button disabled title="comming soon" variant={"link"}>
          Characters
        </Button>
        <Button variant="outline" size="lg" asChild>
          <NavLink to="/library">
            <BooksIcon size={16} weight="regular" />
            My Library
          </NavLink>
        </Button>
      </div>
      
        <Separator/>
      </Menu.Content>

      </Menu>
  );
}
