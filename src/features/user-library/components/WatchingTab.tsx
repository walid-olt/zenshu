import { useLibraryByStatus } from "@/hooks/useAnimeLibrary";
import LibraryGrid from "./LibraryGrid";

export default function WatchingTab() {
  const items = useLibraryByStatus("watching");
  return (
    <LibraryGrid
      items={items}
      emptyTitle="Nothing being watched"
      emptyDescription="Mark anime as 'Watching' to track progress"
    />
  );
}
