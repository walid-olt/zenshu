import { Button } from "./ui/button";
import { ArrowClockwiseIcon } from "@phosphor-icons/react";

function GlobalError() {
  return (
    <section className="h-dvh flex items-center justify-center leading-12 text-center">
      <div>
        <h1 className="text-2xl">Something went wrong</h1>
        <p className="text-foreground/80">
          An unknown error occurred, check your connection and try refreshing
          the page
        </p>
        <Button size={"lg"} onClick={() => (window.location.href = "/")}>
          refresh <ArrowClockwiseIcon />
        </Button>
      </div>
    </section>
  );
}

export default GlobalError;
