import type { Anime } from "@tutkli/jikan-ts";
import { BookmarkIcon } from "@phosphor-icons/react";

import { formatTrailerUrl } from "@/lib/utils/url";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

type Props = {
  anime: Anime;
};

export default function TrailerCover({ anime }: Props) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const url = formatTrailerUrl(anime.trailer);
  //TODO: display something when trailer isn't available
  if (!url) return null;

  useEffect(() => {
    if (!iframeRef.current) return;
    iframeRef.current.classList.add("opacity-100");
  });

  return (
    <div className="w-screen overflow-hidden h-128 relative">
      <iframe
        ref={iframeRef}
        src={url}
        className="pointer-events-none aspect-video w-full opacity-0 transition-all duration-[1000] absolute -mt-16 ease-in"
      />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h1 className="text-3xl font-bold mb-2">{anime.title}</h1>
        <p className="text-muted-foreground text-sm line-clamp-2 max-w-prose mb-4">
          {anime.synopsis}
        </p>
        <div className="flex gap-3">
          <Button variant="default" size="lg">
            View Details
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
