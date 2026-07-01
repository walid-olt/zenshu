import type { AnimeSearchParams } from "@tutkli/jikan-ts";
import { z } from "zod";

const animeSearchTypeSchema = z.enum([
  "tv",
  "movie",
  "ova",
  "special",
  "ona",
  "music",
  "cm",
  "pv",
  "tv_special",
]);

const animeSearchStatusSchema = z.enum(["airing", "complete", "upcoming"]);

const animeRatingSchema = z.enum(["g", "pg", "pg13", "r17", "r", "rx"]);

const animeSearchOrderSchema = z.enum([
  "type",
  "rating",
  "episodes",
  "status",
  "mal_id",
  "title",
  "start_date",
  "end_date",
  "score",
  "scored_by",
  "rank",
  "popularity",
  "members",
  "favorites",
]);

const sortSchema = z.enum(["asc", "desc"]);

const optionalTrimmedString = z.preprocess(
  (value) =>
    typeof value === "string" && value.trim() === "" ? undefined : value,
  z.string().optional(),
);

const optionalBooleanFromSearchParam = z.preprocess((value) => {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    if (normalized === "true" || normalized === "1") {
      return true;
    }
    if (normalized === "false" || normalized === "0") {
      return false;
    }
  }

  return value;
}, z.boolean().optional());

const optionalPositiveIntFromSearchParam = z.preprocess(
  (value) =>
    typeof value === "string" && value.trim() === "" ? undefined : value,
  z.coerce.number().int().positive().optional(),
);

const optionalScoreFromSearchParam = z.preprocess(
  (value) =>
    typeof value === "string" && value.trim() === "" ? undefined : value,
  z.coerce.number().min(0).max(10).optional(),
);

export type AnimeSearchQuery = z.ZodType<Partial<AnimeSearchParams>>;
export const animeSearchQuerySchema = z.object({
  q: optionalTrimmedString,
  page: optionalPositiveIntFromSearchParam,
  limit: optionalPositiveIntFromSearchParam,
  score: optionalScoreFromSearchParam,
  min_score: optionalScoreFromSearchParam,
  max_score: optionalScoreFromSearchParam,
  sfw: optionalBooleanFromSearchParam,
  genres: optionalTrimmedString,
  genres_exclude: optionalTrimmedString,
  sort: sortSchema.optional(),
  letter: optionalTrimmedString,
  producers: optionalTrimmedString,
  start_date: optionalTrimmedString,
  end_date: optionalTrimmedString,
  unapproved: optionalBooleanFromSearchParam,
  type: animeSearchTypeSchema.optional(),
  status: animeSearchStatusSchema.optional(),
  rating: animeRatingSchema.optional(),
  order_by: animeSearchOrderSchema.optional(),
});

export function sanitizeAnimeSearchQuery(
  query: unknown,
): Partial<AnimeSearchParams> {
  const parsedQuery = animeSearchQuerySchema.safeParse(query);
  return parsedQuery.success ? parsedQuery.data : {};
}

export function parseAnimeSearchQuery(
  searchParams: URLSearchParams,
): Partial<AnimeSearchParams> {
  return sanitizeAnimeSearchQuery(Object.fromEntries(searchParams.entries()));
}

export function toAnimeSearchParams(query: unknown): URLSearchParams {
  const safeQuery = sanitizeAnimeSearchQuery(query);
  const nextSearchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(safeQuery)) {
    if (value === undefined || value === null) {
      continue;
    }
    nextSearchParams.set(key, String(value));
  }

  return nextSearchParams;
}
