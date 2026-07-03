import { Separator } from "@/components/ui/separator";
import { useAnimeId, useAnimeDetails } from "../hooks/useAnimeDetails";
import AnimePoster from "./AnimePoster";
import AnimeInfoTags from "./AnimeInfoTags";
import AnimeTrailer from "./AnimeTrailer";
import AnimeSynopsis from "./AnimeSynopsis";
import AnimeBackground from "./AnimeBackground";
import AnimeMainInfo from "./AnimeMainInfo";
import FavoriteButton from "./FavoriteButton";
import LibraryStatusSelect from "./LibraryStatusSelect";
import UserRatingSelect from "./UserRatingSelect";

export default function AnimeDetails() {
  const animeId = useAnimeId();
  const anime = useAnimeDetails(animeId);

  return (
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[300px_1fr]">
      <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start">
        <AnimePoster anime={anime} />

        <div className="flex items-center gap-2">
          <FavoriteButton anime={anime} />
          <LibraryStatusSelect anime={anime} />
          <UserRatingSelect anime={anime} />
        </div>
      </aside>

      <article className="space-y-6 rounded-2xl border border-border bg-card p-6 sm:p-8">
        <header className="space-y-3">
          <AnimeInfoTags anime={anime} />
          <h1 className="font-asimovian text-3xl leading-none tracking-wide sm:text-5xl">
            {anime.title}
          </h1>
          {anime.title_japanese && (
            <p className="text-sm text-muted-foreground">{anime.title_japanese}</p>
          )}
        </header>

        <AnimeTrailer anime={anime} />

        <Separator />

        <AnimeSynopsis anime={anime} />
        <AnimeBackground anime={anime} />

        <Separator />

        <AnimeMainInfo anime={anime} />
      </article>
    </div>
  );
}
