import { CalendarDotsIcon } from "@phosphor-icons/react";
import type { Anime } from "@tutkli/jikan-ts";

type AnimeBackgroundProps = {
  anime: Anime;
};

export default function AnimeBackground({ anime }: AnimeBackgroundProps) {
  if (!anime.background) return null;

  return (
    <section className="space-y-2">
      <h2 className="inline-flex items-center gap-2 text-base font-semibold sm:text-lg">
        <CalendarDotsIcon size={18} />
        Background
      </h2>
      <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
        {anime.background}
      </p>
    </section>
  );
}
