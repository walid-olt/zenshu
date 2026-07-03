import { HeartIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { toggleFavorite } from "../actions/favorites";
import { useLiveQuery } from "dexie-react-hooks";
import localAnimeDB from "@/store/db";
import type { Anime } from "@tutkli/jikan-ts";

type FavoriteButtonProps = {
  anime: Anime;
};

export default function FavoriteButton({ anime }: FavoriteButtonProps) {
  const entry = useLiveQuery(() => localAnimeDB.library.get(anime.mal_id), [anime.mal_id]);
  const isFavorite = entry?.isFavorite === 1;

  return (
    <Button
      variant={isFavorite ? "default" : "outline"}
      className="justify-start"
      onClick={() => toggleFavorite(anime)}
    >
      <HeartIcon size={16} weight={isFavorite ? "fill" : "regular"} />
    </Button>
  );
}
