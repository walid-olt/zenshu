import { cn } from "@/lib/utils";
import type { ComponentPropsWithRef } from "react";

type Props = ComponentPropsWithRef<"span">;
export default function Logo({ className, ...rest }: Props) {
  return (
    <span
      className={cn("text-primary text-4xl font-asimovian", className)}
      {...rest}
    >
      Zenshu
    </span>
  );
}
