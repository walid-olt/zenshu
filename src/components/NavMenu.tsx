import { motion, AnimatePresence, type  HTMLMotionProps, type Variants } from "motion/react"; 
import { createContext, useContext, useState, type ComponentProps } from "react";
import { Button, } from "./ui/button";
import { ListIcon, XIcon } from "@phosphor-icons/react";

type MenuContextType = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuContext = createContext<MenuContextType | null>(null);

function useMenuContext() {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error("useMenuContext must be used within a Menu");
  return ctx;
}

type MenuProps = {
  children?: React.ReactNode;
  defaultOpen?: boolean;
};

function Menu({ children, defaultOpen = false }: MenuProps) {
  const [isOpen, setOpen] = useState(defaultOpen);

  return (
    <MenuContext.Provider value={{ isOpen, setOpen, }}>
      {children}
    </MenuContext.Provider>
  );
}


type MenuTriggerProps = Omit<ComponentProps<typeof Button>, "onClick">;

function MenuTrigger({ children, ...props }: MenuTriggerProps) {
  const { isOpen, setOpen, } = useMenuContext();

  return (
    <Button
      variant="outline"
      size="icon-lg"
      onClick={() => setOpen(!isOpen)}
      {...props}
    >
      {children ? children : isOpen ? <XIcon size={16} weight="regular" /> : <ListIcon size={16} weight="regular"/>}
    </Button>
  );
}

type MenuContentProps = HTMLMotionProps<"div">;

function MenuContent({ children, className, ...props }: MenuContentProps) {
  const { isOpen, setOpen } = useMenuContext();

  const defaultVariants : Variants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.2, ease: "easeInOut" } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={defaultVariants}
          className={`flex flex-col md:hidden overflow-hidden ${className || ""}`}
          onClick={()=>setOpen(false)}
          {...props}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Item Component - Optional addition for styling individual links/buttons inside the menu
type MenuItemProps = HTMLMotionProps<"div">;
function MenuItem({ children, className, ...props }: MenuItemProps) {
  return (
    <motion.div 
      className={`w-full py-2 px-4 hover:bg-accent/50 transition-colors ${className || ""}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

Menu.Trigger = MenuTrigger;
Menu.Content = MenuContent;
Menu.Item = MenuItem;

export default Menu;
