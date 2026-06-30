import { AnimeCardCompact } from "@/components/AnimeCard";
import jikan from "@/lib/api-client/jikan";
import { useSuspenseQuery } from "@tanstack/react-query";

function Trending() {
  const {
    data: { data },
  } = useSuspenseQuery({
    queryKey: ["anime", "Trending"],
    queryFn: () => {
      return jikan.anime.getAnimeSearch({ order_by: "popularity", limit: 6 });
    },
  });

  return (
    <section className="px-8 py-12">
      <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 w-full overflow-x-clip">
        {data.map((anime, i) => (
          <AnimeCardCompact key={anime.mal_id} anime={anime} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Trending;
