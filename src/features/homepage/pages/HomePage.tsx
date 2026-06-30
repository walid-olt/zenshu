import Hero from "../components/Hero";
import Trending from "../components/Trending";
import QueryContainer from "@/components/QueryContainer";

export function Component() {
  return (
    <section>
      <QueryContainer>
        <Hero />
        <Trending />
      </QueryContainer>
    </section>
  );
}
