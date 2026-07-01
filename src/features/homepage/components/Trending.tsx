import jikan from "@/lib/api-client/jikan";
import AnimeSection from "./AnimeSection";
import QueryContainer from "@/components/QueryContainer";

function Trending() {
  return (
    <QueryContainer>
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
