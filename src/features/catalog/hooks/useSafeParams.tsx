import { useSearchParams } from "react-router";
import { parseAnimeSearchQuery, toAnimeSearchParams } from "../utils/query";

import type { AnimeSearchParams } from "@tutkli/jikan-ts";

type Params = Partial<AnimeSearchParams>;
type ParamsUpdater = Params | ((prev: Params) => Params);

export default function useSafeParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = parseAnimeSearchQuery(searchParams);

  const setParams = (nextQuery: ParamsUpdater) => {
    const mergedQuery = {
      ...params,
      ...(typeof nextQuery === "function" ? nextQuery(params) : nextQuery),
    };
    setSearchParams(toAnimeSearchParams(mergedQuery), { replace: true });
  };

  const resetParams = () => {
    setSearchParams({}, { replace: true });
  };

  return [params, setParams, resetParams] as const;
}
