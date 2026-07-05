import CurrenSeason from "../components/CurrentSeason";
import FeaturedCollection from "../components/FeaturedCollection";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import QueryContainer from "@/components/QueryContainer";
import Error from "@/components/Error";
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
        errorFallback={(props) => (
          <div className="w-screen h-[50vh] min-h-[320px] md:h-128 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <Error
              {...props}
              className="my-0 w-full max-w-lg"
              title="Failed to load featured anime"
              description="Couldn't fetch featured anime data, try again"
            />
          </div>
        )}
      >
        <Hero />
      </QueryContainer>

      <FeaturedCollection />

      <Trending />
      <CurrenSeason />
    </section>
  );
}
