import { useSearchParams } from "react-router";
import { parseAnimeSearchQuery, toAnimeSearchParams } from "../utils/query";
import { useCallback, useMemo } from "react";
import type { AnimeSearchParams } from "@tutkli/jikan-ts";

type Params = Partial<AnimeSearchParams>;
type ParamsUpdater = Params | ((prev: Params) => Params);

export default function useSafeParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => parseAnimeSearchQuery(searchParams),
    [searchParams],
  );

  const setParams = useCallback(
    (nextQuery: ParamsUpdater) => {
      const mergedQuery = {
        ...params,
        ...(typeof nextQuery === "function" ? nextQuery(params) : nextQuery),
      };
      setSearchParams(toAnimeSearchParams(mergedQuery), { replace: true });
    },
    [params, setSearchParams],
  );

  const resetParams = useCallback(() => {
    setSearchParams({}, { replace: true });
  }, [setSearchParams]);

  return [params, setParams, resetParams] as const;
}
