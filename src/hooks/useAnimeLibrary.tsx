import localAnimeDB from "@/store/db";
import { useLiveQuery } from "dexie-react-hooks";

export function useAnimeEntry(id: number) {
  return useLiveQuery(() => localAnimeDB.library.get(id), [id]);
}

export function useAllLibrary() {
  return useLiveQuery(() => localAnimeDB.library.toArray(), []);
}

export function useLibraryByStatus(status: "watching" | "to-watch" | "completed") {
  return useLiveQuery(
    () => localAnimeDB.library.where("userStatus").equals(status).toArray(),
    [status],
  );
}

export function useFavorites() {
  return useLiveQuery(
    () => localAnimeDB.library.where("isFavorite").equals(1).toArray(),
    [],
  );
}

export function useRated() {
  return useLiveQuery(
    () => localAnimeDB.library.filter((e) => e.userRating != null).toArray(),
    [],
  );
}

export function addAnime(animeEntry: import("@/store/db").AnimeEntry) {
  return localAnimeDB.library.add(animeEntry);
}

export function updateAnime(id: number, update: Partial<import("@/store/db").AnimeEntry>) {
  return localAnimeDB.library.update(id, update);
}
