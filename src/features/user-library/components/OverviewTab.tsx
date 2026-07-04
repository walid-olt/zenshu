import { useAllLibrary, useFavorites, useLibraryByStatus, useRated } from "@/hooks/useAnimeLibrary";
import { BookOpenIcon, HeartStraightIcon, EyeIcon, BookmarkIcon, CheckFatIcon, StarIcon } from "@phosphor-icons/react";
import LibraryGrid from "./LibraryGrid";
import StatCard from "./StatCard";

export default function OverviewTab() {
  const all = useAllLibrary();
  const favorites = useFavorites();
  const watching = useLibraryByStatus("watching");
  const watchlist = useLibraryByStatus("to-watch");
  const completed = useLibraryByStatus("completed");
  const rated = useRated();

  const stats = [
    { icon: <BookOpenIcon size={18} />, label: "Total", count: all?.length ?? 0 },
    { icon: <HeartStraightIcon size={18} />, label: "Favorites", count: favorites?.length ?? 0 },
    { icon: <EyeIcon size={18} />, label: "Watching", count: watching?.length ?? 0 },
    { icon: <BookmarkIcon size={18} />, label: "Watchlist", count: watchlist?.length ?? 0 },
    { icon: <CheckFatIcon size={18} />, label: "Completed", count: completed?.length ?? 0 },
    { icon: <StarIcon size={18} />, label: "Rated", count: rated?.length ?? 0 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground">Recently Added</h3>
        <LibraryGrid
          items={all?.slice().reverse().slice(0, 6)}
          emptyTitle="Your library is empty"
          emptyDescription="Start adding anime from the catalog or search"
        />
      </section>
    </div>
  );
}
