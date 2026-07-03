import type { Anime } from "@tutkli/jikan-ts";
import { StarIcon, UsersIcon, TrophyIcon, TrendUpIcon, HeartIcon, ClockIcon } from "@phosphor-icons/react";

type AnimeMainInfoProps = {
  anime: Anime;
};

function formatDate(dateStr: string | null | undefined) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-right font-medium">{value ?? "—"}</span>
    </div>
  );
}

export default function AnimeMainInfo({ anime }: AnimeMainInfoProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-base font-semibold sm:text-lg">Main Info</h2>
      <dl className="grid gap-3 rounded-xl border border-border bg-background p-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <InfoRow
            label="Score"
            value={
              <span className="inline-flex items-center gap-1">
                <StarIcon size={14} weight="fill" className="text-chart-1" />
                {anime.score ?? "—"}
              </span>
            }
          />
          <InfoRow
            label="Rank"
            value={
              <span className="inline-flex items-center gap-1">
                <TrophyIcon size={14} />
                {anime.rank ? `#${anime.rank}` : "—"}
              </span>
            }
          />
          <InfoRow
            label="Popularity"
            value={
              <span className="inline-flex items-center gap-1">
                <TrendUpIcon size={14} />
                {anime.popularity ? `#${anime.popularity}` : "—"}
              </span>
            }
          />
          <InfoRow
            label="Members"
            value={
              <span className="inline-flex items-center gap-1">
                <UsersIcon size={14} />
                {anime.members?.toLocaleString() ?? "—"}
              </span>
            }
          />
          <InfoRow
            label="Favorites"
            value={
              <span className="inline-flex items-center gap-1">
                <HeartIcon size={14} />
                {anime.favorites?.toLocaleString() ?? "—"}
              </span>
            }
          />
        </div>

        <div className="space-y-1.5">
          <InfoRow label="Status" value={anime.status} />
          <InfoRow label="Season" value={anime.season ? `${anime.season} ${anime.year}` : "—"} />
          <InfoRow label="Source" value={anime.source} />
          <InfoRow
            label="Duration"
            value={
              <span className="inline-flex items-center gap-1">
                <ClockIcon size={14} />
                {anime.duration}
              </span>
            }
          />
          <InfoRow label="Rating" value={anime.rating} />
          <InfoRow
            label="Studios"
            value={anime.studios?.map((s) => s.name).join(", ") || "—"}
          />
          <InfoRow
            label="Aired"
            value={
              anime.aired
                ? `${formatDate(anime.aired.from)} – ${formatDate(anime.aired.to)}`
                : "—"
            }
          />
        </div>
      </dl>

      {anime.genres && anime.genres.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {anime.genres.map((genre) => (
            <span
              key={genre.mal_id}
              className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {genre.name}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
