import localAnimeDB, { type AnimeEntry } from "@/store/db";
import type { Anime } from "@tutkli/jikan-ts";

export async function toggleFavorite(anime: Anime) {
  const existing = await localAnimeDB.library.get(anime.mal_id);
  if (existing) {
    await localAnimeDB.library.update(anime.mal_id, {
      isFavorite: existing.isFavorite ? 0 : 1,
    });
  } else {
    const entry: AnimeEntry = {
      ...anime,
      isFavorite: 1,
      userRating: null,
      userStatus: null,
    };
    await localAnimeDB.library.put(entry);
  }
}

export async function setFavorite(anime: Anime, value: 1 | 0) {
  const existing = await localAnimeDB.library.get(anime.mal_id);
  if (existing) {
    await localAnimeDB.library.update(anime.mal_id, { isFavorite: value });
  } else {
    const entry: AnimeEntry = {
      ...anime,
      isFavorite: value,
      userRating: null,
      userStatus: null,
    };
    await localAnimeDB.library.put(entry);
  }
}
