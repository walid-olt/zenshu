import { TelevisionSimpleIcon } from "@phosphor-icons/react";
import type { Anime } from "@tutkli/jikan-ts";

type AnimeInfoTagsProps = {
  anime: Anime;
};

export default function AnimeInfoTags({ anime }: AnimeInfoTagsProps) {
  const parts = [
    anime.type,
    anime.year?.toString(),
    anime.episodes ? `${anime.episodes} Episodes` : null,
  ].filter(Boolean);

  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
      <TelevisionSimpleIcon size={14} />
      {parts.join(" • ")}
    </p>
  );
}
