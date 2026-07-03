import localAnimeDB, { type AnimeEntry } from "@/store/db";
import type { Anime } from "@tutkli/jikan-ts";

type AnimeStatus = AnimeEntry["userStatus"];

export async function saveToLibrary(
  anime: Anime,
  status: AnimeStatus,
  rating?: number | null,
) {
  const existing = await localAnimeDB.library.get(anime.mal_id);
  const entry: AnimeEntry = {
    ...anime,
    isFavorite: existing?.isFavorite ?? null,
    userRating: rating ?? null,
    userStatus: status,
  };
  await localAnimeDB.library.put(entry);
}
