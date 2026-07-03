import dixie, { type Table } from "dexie";
import type { Anime } from "@tutkli/jikan-ts";

type AnimeStatus = "watching" | "to-watch" | "completed";

export interface AnimeEntry extends Anime {
  //NOTE: indexedDB can't index booleans, so we use binary instead (I hope that 300ms is worth it)
  isFavorite: 1 | 0 | null;
  userRating: number | null;
  userStatus: AnimeStatus | null;
}

class LocalAnimeDB extends dixie {
  library!: Table<AnimeEntry, number>;
  constructor() {
    super("zenshu");
    this.version(2).stores({
      library: "mal_id, userStatus, isFavorite",
    });
  }
}

const localAnimeDB = new LocalAnimeDB();

export default localAnimeDB;
