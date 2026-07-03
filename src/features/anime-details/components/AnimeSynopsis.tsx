import { FilmSlateIcon } from "@phosphor-icons/react";
import type { Anime } from "@tutkli/jikan-ts";

type AnimeSynopsisProps = {
  anime: Anime;
};

export default function AnimeSynopsis({ anime }: AnimeSynopsisProps) {
  return (
    <section className="space-y-2">
      <h2 className="inline-flex items-center gap-2 text-base font-semibold sm:text-lg">
        <FilmSlateIcon size={18} />
        Synopsis
      </h2>
      <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
        {anime.synopsis}
      </p>
    </section>
  );
}
