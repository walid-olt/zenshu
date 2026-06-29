import dixie from "dexie";
import type { Anime } from "@tutkli/jikan-ts";

// TODO: create and configure DB
class LocalDB extends dixie {
  constructor() {
    super("zenshu");
  }
}
