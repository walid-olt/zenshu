import QueryContainer from "@/components/QueryContainer";
import AnimeDetails from "../components/AnimeDetails";
import Error from "@/components/Error";

export function Component() {
  return (
    <section className="px-4 py-6 sm:px-8">
      <QueryContainer
        loadingMessage="Loading Anime details"
        errorFallback={(props) => (
          <Error
            {...props}
            title="Failed to load anime details"
            description="check your internet and try refreshing the page"
          />
        )}
      >
        <AnimeDetails />
      </QueryContainer>
    </section>
  );
}
