import { useLibraryByStatus } from "@/hooks/useAnimeLibrary";
import LibraryGrid from "./LibraryGrid";

export default function CompletedTab() {
  const items = useLibraryByStatus("completed");
  return (
    <LibraryGrid
      items={items}
      emptyTitle="No completed anime"
      emptyDescription="Finished an anime? Mark it as completed"
    />
  );
}
