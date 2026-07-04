import type { Anime } from "@tutkli/jikan-ts";
export function formatTrailerUrl(trailer: Anime["trailer"]): string | null {
  if (!trailer.embed_url) return null;

  // Extract video ID from either format:
  // https://www.youtube-nocookie.com/embed/jk7QSGwupPA?...
  // or https://www.youtube.com/watch?v=jk7QSGwupPA
  const match = trailer.embed_url.match(/(?:embed\/|v=)([a-zA-Z0-9_-]{11})/);
  if (!match) return null;

  const videoId = match[1];

  // Rebuild params
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
disablekb:"1",
    fs:"0",
    controls: "0",
    loop: "1",
    modestbranding: "1",
    playlist: videoId,
  });

  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}
