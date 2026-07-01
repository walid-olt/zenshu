import type { Anime } from "@tutkli/jikan-ts";
import { useSuspenseQuery } from "@tanstack/react-query";

type Props = {
  heading: string;
  fetcher: () => Promise<{ data: Anime[] }>;
};

const rotations = [-16, 0, 16];
const offsetsX = [-64, 0, 64];
const offsetsY = [-24, -12, 0];

function FeaturedCollectionCard({ heading, fetcher }: Props) {
  const {
    data: { data },
  } = useSuspenseQuery({
    queryKey: ["featured-collection", heading],
    queryFn: fetcher,
    staleTime: Infinity,
  });

  const posters = data.slice(0, 3);

  return (
    <article className="rounded-xl border   max-h-72 overflow-hidden border-border bg-card  px-4 pt-4 py-8 group/card">
      <h3 className="text-xl font-semibold text-wrap   py-4 text-center">
        {heading}
      </h3>
      <div className="relative mx-auto h-44 w-44 sm:h-52 sm:w-52 mt-12">
        {posters.map((anime, index) => {
          const imageUrl =
            anime.images?.webp?.large_image_url ??
            anime.images?.webp?.image_url ??
            anime.images?.jpg?.large_image_url ??
            anime.images?.jpg?.image_url;

          return (
            <div
              key={anime.mal_id}
              className="absolute top-0 left-1/2 h-full w-32 sm:w-36 rounded-lg overflow-hidden border border-border bg-muted shadow-xl"
              style={{
                zIndex: index,
                transform: `translateY(calc(${offsetsY[index]}px))  translateX(calc(-50% + ${offsetsX[index]}px)) rotate(${rotations[index]}deg)`,
              }}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={anime.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full" />
              )}
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default FeaturedCollectionCard;
