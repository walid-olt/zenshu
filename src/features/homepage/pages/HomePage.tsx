import CurrenSeason from "../components/CurrentSeason";
import FeaturedCollection from "../components/FeaturedCollection";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import QueryContainer from "@/components/QueryContainer";

export default function HomePage() {
  return (
    <section>
      <QueryContainer>
        <Hero />
      </QueryContainer>

      <FeaturedCollection />

      <Trending />
      <CurrenSeason />
    </section>
  );
}
