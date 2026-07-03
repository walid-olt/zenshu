import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StarIcon } from "@phosphor-icons/react";
import { saveToLibrary } from "../actions/library";
import { useLiveQuery } from "dexie-react-hooks";
import localAnimeDB from "@/store/db";
import type { Anime } from "@tutkli/jikan-ts";

type UserRatingSelectProps = {
  anime: Anime;
};

export default function UserRatingSelect({ anime }: UserRatingSelectProps) {
  const entry = useLiveQuery(() => localAnimeDB.library.get(anime.mal_id), [anime.mal_id]);

  return (
    <Select
      value={entry?.userRating?.toString() ?? undefined}
      onValueChange={(value) =>
        saveToLibrary(anime, entry?.userStatus ?? null, parseInt(value))
      }
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Rate" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Rating (10 highest)</SelectLabel>
          {Array.from({ length: 11 }, (_, i) => (
            <SelectItem key={i} value={i.toString()}>
              <span className="inline-flex items-center gap-2">
                <StarIcon size={14} weight="fill" className="text-chart-1" />
                {i}/10
              </span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
