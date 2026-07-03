import type { Anime } from "@tutkli/jikan-ts";

export function usePosterUrl(anime: Anime): string {
  const img = anime.images.jpg ?? anime.images.webp;
  return (
    img.image_url ??
    img.small_image_url ??
    img.medium_image_url ??
    img.large_image_url ??
    img.maximum_image_url
  );
}
