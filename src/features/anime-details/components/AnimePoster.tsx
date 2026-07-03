import type { Anime } from "@tutkli/jikan-ts";
import { usePosterUrl } from "../hooks/usePosterUrl";

type AnimePosterProps = {
  anime: Anime;
};

export default function AnimePoster({ anime }: AnimePosterProps) {
  const imgUrl = usePosterUrl(anime);
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <img
        src={imgUrl}
        alt={`${anime.title} poster`}
        className="aspect-2/3 h-auto w-full object-cover"
      />
    </div>
  );
}
