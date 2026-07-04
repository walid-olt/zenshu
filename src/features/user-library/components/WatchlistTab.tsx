import { useLibraryByStatus } from "@/hooks/useAnimeLibrary";
import LibraryGrid from "./LibraryGrid";

export default function WatchlistTab() {
  const items = useLibraryByStatus("to-watch");
  return (
    <LibraryGrid
      items={items}
      emptyTitle="Watchlist is empty"
      emptyDescription="Save anime as 'To Watch' to build your list"
    />
  );
}
