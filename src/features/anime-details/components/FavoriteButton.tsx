import { HeartIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { toggleFavorite } from "../actions/favorites";
import type { Anime } from "@tutkli/jikan-ts";
import { useAnimeEntry } from "@/hooks/useAnimeLibrary";

type FavoriteButtonProps = {
  anime: Anime;
};

export default function FavoriteButton({ anime }: FavoriteButtonProps) {
  const entry = useAnimeEntry(anime.mal_id);
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
