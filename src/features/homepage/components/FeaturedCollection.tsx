import QueryContainer from "@/components/QueryContainer";
import jikan from "@/lib/api-client/jikan";
import { getSeason } from "@/lib/utils";
import FeaturedCollectionCard from "./FeaturedCollectionCard";
import Error from "@/components/Error";

export default function FeaturedCollection() {
  // TODO: add links to each collection to redirect to the catalog
  return (
    <div className="grid gap-6 px-8 py-12 md:grid-cols-3">
      <QueryContainer
        errorFallback={(props) => (
          <Error
            description=""
            {...props}
            title="Failed to load collection data"
          />
        )}
      >
        <FeaturedCollectionCard
          heading="The Best Mystical Anime"
          fetcher={() =>
            jikan.anime.getAnimeSearch({
              limit: 3,
              sort: "asc",
              order_by: "popularity",
              type: "tv",
              q: "Mystical",
            })
          }
        />
        <FeaturedCollectionCard
          heading={`Top 20 Romance Anime `}
          fetcher={() =>
            jikan.anime.getAnimeSearch({
              limit: 3,
              order_by: "popularity",
              sort: "asc",
              q: "Romance",
            })
          }
        />
        <FeaturedCollectionCard
          heading={`This ${getSeason(new Date())} Collection`}
          fetcher={() => jikan.seasons.getSeasonNow({ limit: 3 })}
        />
      </QueryContainer>
    </div>
  );
}
