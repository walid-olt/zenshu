import jikan from "@/lib/api-client/jikan";
import AnimeSection from "./AnimeSection";
import QueryContainer from "@/components/QueryContainer";
import Error from "@/components/Error";
import { AnimeCardSkeleton } from "@/components/LoadingSkeletons";

function Trending() {
  return (
    <QueryContainer
      loadingFallback={
        <section className="px-8 py-12">
          <div className="mb-6 h-8 w-48 rounded-full bg-muted animate-pulse" />
          <div className="grid grid-cols-3 gap-4 w-full overflow-x-clip md:grid-cols-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <AnimeCardSkeleton key={index} />
            ))}
          </div>
        </section>
      }
      errorFallback={(props) => (
        <section className="px-8 py-12">
          <Error
            {...props}
            title="Failed to load trending anime"
            description="Couldn't fetch trending anime, try again"
          />
        </section>
      )}
    >
      <AnimeSection
        heading="Trending now"
        fetcher={() =>
          jikan.anime.getAnimeSearch({
            limit: 6,
            status: "airing",
            sort: "asc",
            order_by: "popularity",
          })
        }
      />
    </QueryContainer>
  );
}

export default Trending;
