import { BookmarkIcon, ArrowSquareUpRightIcon } from "@phosphor-icons/react";

import { formatTrailerUrl } from "@/lib/utils/url";
import { Button } from "@/components/ui/button";
import jikan from "@/lib/api-client/jikan";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "react-router";

export default function Hero() {
  const {
    data: { data },
  } = useSuspenseQuery({
    queryKey: ["anime", "cover"],
    queryFn: () => jikan.anime.getAnimeSearch({ q: "chainsaw man", limit: 1 }),
    staleTime: 1000 * 60 * 60,
  });
  const anime = data[0];
  const url = formatTrailerUrl(anime.trailer);
  //TODO: display something when trailer isn't available
  if (!url) return null;

  return (
    <div className="w-screen overflow-hidden h-[50vh] min-h-[320px] md:h-128 relative">
      <iframe
        src={url}
        title={`${anime.title} trailer`}
        onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
        className="pointer-events-none aspect-video w-full opacity-0 transition-all duration-1000 absolute -mt-16 ease-in"
      />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{anime.title}</h1>
        <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 max-w-prose mb-4">
          {anime.synopsis}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="default" size="lg" asChild>
            <Link to={`/catalog/${anime.mal_id}`}>

            View Details <ArrowSquareUpRightIcon size={16} weight="bold" />
            </Link>
          </Button>
          <Button variant="secondary" size="lg">
            <BookmarkIcon size={16} weight="regular" />
            To Watch
          </Button>
        </div>
      </div>
    </div>
  );
}
