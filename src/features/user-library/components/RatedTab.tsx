import { useRated } from "@/hooks/useAnimeLibrary";
import LibraryGrid from "./LibraryGrid";

export default function RatedTab() {
  const items = useRated();
  return (
    <LibraryGrid
      items={items}
      emptyTitle="No rated anime"
      emptyDescription="Rate anime you've watched to see them here"
    />
  );
}
