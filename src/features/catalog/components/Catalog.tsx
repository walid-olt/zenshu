import useDebounce from "@/hooks/useDebounce";
import useSafeParams from "../hooks/useSafeParams";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import jikan from "@/lib/api-client/jikan";
import { AnimeCard } from "@/components/AnimeCard";
import { AnimeCardSkeleton } from "@/components/LoadingSkeletons";
import EmptyResult from "@/components/EmptyResult";
import { Button } from "@/components/ui/button";

function Catalog() {
  const [params, setParams, resetParams] = useSafeParams();

  const debouncedParams = useDebounce(params, 1000);
  //TODO: handle errors
  const { isFetching, isError, error, data } = useQuery({
    queryKey: [debouncedParams],
    gcTime:1000*60,
    staleTime:1000*60,
    placeholderData:keepPreviousData,
    queryFn: () =>
      jikan.anime.getAnimeSearch({ ...debouncedParams, limit: 24, sfw: false}),
  });

  // let the error boundary handle the fallback
  if (error) throw new Error();

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
    if (anime.length === 0) {
      return (
        <EmptyResult
          title="Couldn't find anything that matches your search"
          description="try adjusting your search"
        >
          <Button variant={"outline"} onClick={resetParams}>
            Reset filters
          </Button>
        </EmptyResult>
      );
    }

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
