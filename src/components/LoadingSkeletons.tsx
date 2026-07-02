import { cn } from "@/lib/utils";

type SkeletonProps = {
  className?: string;
};

function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("animate-pulse bg-muted", className)}
    />
  );
}

export function AnimeCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card w-full">
      <Skeleton className="aspect-3/4 w-full" />
      <div className="space-y-2 p-2.5">
        <Skeleton className="h-4 w-11/12 rounded-full" />
        <div className="flex items-center justify-between gap-3">
          <Skeleton className="h-3.5 w-2/5 rounded-full" />
          <Skeleton className="h-3.5 w-12 rounded-full" />
        </div>
      </div>
    </div>
  );
}

type SectionBlockSkeletonProps = {
  variant?: "hero" | "collection";
  className?: string;
};

export function SectionBlockSkeleton({
  variant = "hero",
  className,
}: SectionBlockSkeletonProps) {
  if (variant === "collection") {
    return (
      <article
        aria-hidden="true"
        className={cn(
          "max-h-72 overflow-hidden rounded-xl border border-border bg-card px-4 pt-4 py-8",
          className,
        )}
      >
        <div className="mx-auto h-6 w-3/4 rounded-full bg-muted animate-pulse" />
        <div className="relative mx-auto mt-12 h-44 w-44 sm:h-52 sm:w-52">
          <Skeleton className="absolute top-0 left-1/2 h-full w-32 -translate-x-1/2 rounded-lg border border-border shadow-xl" />
          <Skeleton className="absolute top-0 left-1/2 h-full w-32 translate-x-[-35%] rotate-12 rounded-lg border border-border shadow-xl" />
          <Skeleton className="absolute top-0 left-1/2 h-full w-32 translate-x-[5%] -rotate-12 rounded-lg border border-border shadow-xl" />
        </div>
      </article>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative h-128 overflow-hidden rounded-2xl border border-border bg-card",
        className,
      )}
    >
      <Skeleton className="absolute inset-0" />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 space-y-4 p-8">
        <Skeleton className="h-9 w-2/3 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full rounded-full" />
          <Skeleton className="h-4 w-5/6 rounded-full" />
        </div>
        <div className="flex gap-3">
          <Skeleton className="h-9 w-36 rounded-lg" />
          <Skeleton className="h-9 w-28 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
