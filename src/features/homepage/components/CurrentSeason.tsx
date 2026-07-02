import jikan from "@/lib/api-client/jikan";
import AnimeSection from "./AnimeSection";
import QueryContainer from "@/components/QueryContainer";
import { getSeason } from "@/lib/utils";
import { AnimeCardSkeleton } from "@/components/LoadingSkeletons";

function CurrenSeason() {
  return (
    <QueryContainer
      loadingFallback={
        <section className="px-8 py-12">
          <div className="mb-6 h-8 w-56 rounded-full bg-muted animate-pulse" />
          <div className="grid grid-cols-3 gap-4 w-full overflow-x-clip md:grid-cols-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <AnimeCardSkeleton key={index} />
            ))}
          </div>
        </section>
      }
    >
      <AnimeSection
        heading={`Populare this ${getSeason(new Date())}`}
        fetcher={() => jikan.seasons.getSeasonNow({ limit: 6 })}
      />
    </QueryContainer>
  );
}

export default CurrenSeason;
