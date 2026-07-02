import { AnimeCardAnimated } from "@/components/AnimeCard";
import jikan from "@/lib/api-client/jikan";
import { useSuspenseQuery } from "@tanstack/react-query";

type Props = {
  heading: string;
  fetcher: typeof jikan.anime.getAnimeSearch;
};
function AnimeSection({ heading, fetcher }: Props) {
  const {
    data: { data },
  } = useSuspenseQuery({
    queryKey: ["anime", "airing"],
    queryFn: () => {
      return fetcher();
    },
  });

  return (
    <section className="px-8 py-12">
      <h2 className="text-2xl font-bold mb-6">{heading}</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 w-full overflow-x-clip">
        {/* slice because the API randomly ignores the limit  */}
        {data.slice(0, 6).map((anime, i) => (
          <AnimeCardAnimated key={anime.mal_id} anime={anime} index={i} />
        ))}
      </div>
    </section>
  );
}

export default AnimeSection;
