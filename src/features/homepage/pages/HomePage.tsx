import CurrenSeason from "../components/CurrentSeason";
import FeaturedCollection from "../components/FeaturedCollection";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import QueryContainer from "@/components/QueryContainer";
import { SectionBlockSkeleton } from "@/components/LoadingSkeletons";

export default function HomePage() {
  return (
    <section>
      <QueryContainer
        loadingFallback={
          <SectionBlockSkeleton
            variant="hero"
            className="w-screen rounded-none border-0"
          />
        }
      >
        <Hero />
      </QueryContainer>

      <FeaturedCollection />

      <Trending />
      <CurrenSeason />
    </section>
  );
}
