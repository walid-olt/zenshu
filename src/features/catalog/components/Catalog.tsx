import useDebounce from "@/hooks/useDebounce";
import useSafeParams from "../hooks/useSafeParams";
import { useQuery } from "@tanstack/react-query";
import jikan from "@/lib/api-client/jikan";
import { AnimeCard } from "@/components/AnimeCard";
import { AnimeCardSkeleton } from "@/components/LoadingSkeletons";

function Catalog() {
  const [params] = useSafeParams();

  const debouncedParams = useDebounce(params, 1000);
  //TODO: handle errors
  const { isFetching, isError, error, data } = useQuery({
    queryKey: [debouncedParams],
    queryFn: () =>
      jikan.anime.getAnimeSearch({ ...debouncedParams, limit: 24, sfw: true }),
  });

  if (isFetching) {
    return (
      <section>
        <div className="grid grid-cols-3 gap-2 w-full overflow-x-clip md:grid-cols-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <AnimeCardSkeleton key={index} />
          ))}
        </div>
      </section>
    );
  }
  const anime = data?.data;
  if (anime) {
    return (
      <div className="grid grid-cols-3 gap-2 w-full overflow-x-clip md:grid-cols-6">
        {anime.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    );
  }
}

export default Catalog;
