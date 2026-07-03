// TODO: refactor this
import {
  BookmarksIcon,
  CalendarDotsIcon,
  FilmSlateIcon,
  HeartIcon,
  PlayCircleIcon,
  StarIcon,
  TelevisionSimpleIcon,
  EyeIcon,
  CheckFatIcon,
  BookmarkIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useParams } from "react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import jikan from "@/lib/api-client/jikan";
import { formatTrailerUrl } from "@/lib/utils/url";

export default function AnimeDetails() {
  const { id } = useParams();
  const animeId = parseInt(id || "");
  if (isNaN(animeId)) throw new Error("Invalid anime ID");
  const { data } = useSuspenseQuery({
    queryKey: ["anime", animeId],
    queryFn: () => jikan.anime.getAnimeById(animeId),
  });
  const anime = data.data;
  const img = anime.images.jpg ?? anime.images.webp;
  const imgUrl =
    img.image_url ||
    img.small_image_url ||
    img.medium_image_url ||
    img.large_image_url ||
    img.maximum_image_url;
  const trailer = formatTrailerUrl(anime.trailer);
  return (
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[300px_1fr]">
      <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start">
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm ">
          <img
            src={imgUrl}
            alt={`${anime.title} poster`}
            className="aspect-2/3 h-auto w-full object-cover"
          />
        </div>

        <div
          className=" flex gap-2
           items-center"
        >
          <Button className=" justify-start">
            <HeartIcon size={16} weight="fill" />
          </Button>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Save" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Save to library</SelectLabel>
                <SelectItem value={"to watch"}>
                  <span className="inline-flex items-center gap-2">
                    <BookmarkIcon size={14} />
                    To Watch
                  </span>
                </SelectItem>

                <SelectItem value={"watching"}>
                  <span className="inline-flex items-center gap-2">
                    <EyeIcon size={14} />
                    Watching
                  </span>
                </SelectItem>

                <SelectItem value={"watched"}>
                  <span className="inline-flex items-center gap-2">
                    <CheckFatIcon size={14} />
                    Watching
                  </span>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Add your rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Rating (10 highest)</SelectLabel>
                {Array.from({ length: 10 }).map((n, idx) => (
                  <SelectItem key={idx} value={idx.toString()}>
                    <span className="inline-flex items-center gap-2">
                      <StarIcon size={14} weight="fill" fill="var(--chart-1)" />
                      {idx}/10
                    </span>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </aside>

      <article className="space-y-6 rounded-2xl border border-border bg-card p-6 sm:p-8">
        <header className="space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
            <TelevisionSimpleIcon size={14} />
            TV Series • 2009 • 64 Episodes
          </p>
          <h1 className="font-asimovian text-3xl leading-none tracking-wide sm:text-5xl">
            {anime.title}
          </h1>
        </header>

        {trailer && (
          <section className="space-y-3">
            <h2 className="inline-flex items-center gap-2 text-base font-semibold sm:text-lg">
              <PlayCircleIcon size={18} />
              Trailer
            </h2>
            <div className="overflow-hidden rounded-xl border border-border bg-background">
              <iframe
                src={trailer}
                title={`${anime.title} trailer`}
                className="aspect-video w-full"
              />
            </div>
          </section>
        )}

        <Separator />

        <section className="space-y-2">
          <h2 className="inline-flex items-center gap-2 text-base font-semibold sm:text-lg">
            <FilmSlateIcon size={18} />
            Synopsis
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            {anime.synopsis}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="inline-flex items-center gap-2 text-base font-semibold sm:text-lg">
            <CalendarDotsIcon size={18} />
            Background
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            {anime.background}
          </p>
        </section>

        <Separator />

        <section className="space-y-3">
          <h2 className="text-base font-semibold sm:text-lg">Main info</h2>
          <dl className="grid gap-3 rounded-xl border border-border bg-background p-4 sm:grid-cols-2">
            {" "}
          </dl>
        </section>
      </article>
    </div>
  );
}
