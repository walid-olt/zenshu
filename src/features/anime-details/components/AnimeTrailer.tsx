import { PlayCircleIcon } from "@phosphor-icons/react";
import { formatTrailerUrl } from "@/lib/utils/url";
import type { Anime } from "@tutkli/jikan-ts";

type AnimeTrailerProps = {
  anime: Anime;
};

export default function AnimeTrailer({ anime }: AnimeTrailerProps) {
  const trailer = formatTrailerUrl(anime.trailer);
  if (!trailer) return null;

  return (
    <section className="space-y-3">
      <h2 className="inline-flex items-center gap-2 text-base font-semibold sm:text-lg">
        <PlayCircleIcon size={18} />
        Trailer
      </h2>
      <div className="overflow-hidden rounded-xl border border-border bg-background">
        <iframe
          src={trailer}
          title={`${anime.title} trailer`}
          className="aspect-video w-full"
        />
      </div>
    </section>
  );
}
