import { useParams } from "react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import jikan from "@/lib/api-client/jikan";

export function useAnimeId() {
  const { id } = useParams();
  const animeId = parseInt(id ?? "");
  if (isNaN(animeId)) throw new Error("Invalid anime ID");
  return animeId;
}

export function useAnimeDetails(animeId: number) {
  const { data } = useSuspenseQuery({
    queryKey: ["anime", animeId],
    queryFn: () => jikan.anime.getAnimeById(animeId),
  });
  return data.data;
}
