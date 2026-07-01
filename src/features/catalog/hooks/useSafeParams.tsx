import { useSearchParams } from "react-router";
import { parseAnimeSearchQuery, toAnimeSearchParams } from "../utils/query";
import { useCallback, useMemo } from "react";
import type { AnimeSearchParams } from "@tutkli/jikan-ts";

type SafeAnimeSearchParams = Partial<AnimeSearchParams>;
type UnsafeAnimeSearchParams = Partial<
  Record<keyof AnimeSearchParams, unknown>
>;
type SafeParamsUpdater =
  | UnsafeAnimeSearchParams
  | ((prev: SafeAnimeSearchParams) => UnsafeAnimeSearchParams);

export default function useSafeParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => parseAnimeSearchQuery(searchParams),
    [searchParams],
  );

  const setParams = useCallback(
    (nextQuery: SafeParamsUpdater) => {
      const partialQuery =
        typeof nextQuery === "function" ? nextQuery(params) : nextQuery;
      const mergedQuery = {
        ...params,
        ...partialQuery,
      };

      setSearchParams(toAnimeSearchParams(mergedQuery));
    },
    [params, setSearchParams],
  );

  return [params, setParams] as const;
}
