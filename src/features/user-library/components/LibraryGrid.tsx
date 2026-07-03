import type { AnimeEntry } from "@/store/db";
import { AnimeCard } from "@/components/AnimeCard";
import EmptyResult from "@/components/EmptyResult";

type LibraryGridProps = {
  items: AnimeEntry[] | undefined;
  emptyTitle?: string;
  emptyDescription?: string;
};

export default function LibraryGrid({
  items,
  emptyTitle = "Nothing here yet",
  emptyDescription,
}: LibraryGridProps) {
  if (!items) {
    return (
      <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-lg border border-border bg-card w-full">
            <div className="aspect-3/4 w-full animate-pulse bg-muted" />
            <div className="space-y-2 p-2.5">
              <div className="h-4 w-11/12 animate-pulse rounded-full bg-muted" />
              <div className="h-3.5 w-2/5 animate-pulse rounded-full bg-muted" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <EmptyResult
        title={emptyTitle}
        description={emptyDescription}
      />
    );
  }

  return (
    <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
      {items.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
}
