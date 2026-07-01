import jikan from "@/lib/api-client/jikan";
import AnimeSection from "./AnimeSection";
import QueryContainer from "@/components/QueryContainer";
import { getSeason } from "@/lib/utils";

function CurrenSeason() {
  return (
    <QueryContainer>
      <AnimeSection
        heading={`Populare this ${getSeason(new Date())}`}
        fetcher={() => jikan.seasons.getSeasonNow({ limit: 6 })}
      />
    </QueryContainer>
  );
}

export default CurrenSeason;
