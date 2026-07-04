import { useFavorites } from "@/hooks/useAnimeLibrary";
import LibraryGrid from "./LibraryGrid";

export default function FavoritesTab() {
  const items = useFavorites();
  return (
    <LibraryGrid
      items={items}
      emptyTitle="No favorites yet"
      emptyDescription="Heart anime you love to add them here"
    />
  );
}
