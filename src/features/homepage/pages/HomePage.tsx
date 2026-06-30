import { useSuspenseQuery } from "@tanstack/react-query";
import jikan from "@/lib/api-client/jikan";
import TrailerCover from "../components/TrailerCover";

export function Component() {
  const {
    data: { data },
  } = useSuspenseQuery({
    queryKey: ["anime", "cover"],
    queryFn: () => jikan.anime.getAnimeSearch({ q: "chainsaw man", limit: 1 }),
    staleTime: 1000 * 60 * 60,
  });
  const anime = data[0];
  return (
    <section>
      <TrailerCover anime={anime} />
    </section>
  );
}
