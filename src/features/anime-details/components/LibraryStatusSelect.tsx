import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BookmarkIcon,
  EyeIcon,
  CheckFatIcon,
} from "@phosphor-icons/react";
import { saveToLibrary } from "../actions/library";
import type { Anime } from "@tutkli/jikan-ts";
import { useAnimeEntry } from "@/hooks/useAnimeLibrary";

type LibraryStatusSelectProps = {
  anime: Anime;
};

const statuses = [
  { value: "to-watch", label: "To Watch", icon: BookmarkIcon },
  { value: "watching", label: "Watching", icon: EyeIcon },
  { value: "completed", label: "Completed", icon: CheckFatIcon },
] as const;

export default function LibraryStatusSelect({ anime }: LibraryStatusSelectProps) {
  const entry = useAnimeEntry(anime.mal_id);

  return (
    <Select
      value={entry?.userStatus ?? ""}
      onValueChange={(value) =>
        saveToLibrary(anime, value as "to-watch" | "watching" | "completed")
      }
    >
      <SelectTrigger>
        <SelectValue placeholder="Save" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Save to library</SelectLabel>
          {statuses.map(({ value, label, icon: Icon }) => (
            <SelectItem key={value} value={value}>
              <span className="inline-flex items-center gap-2">
                <Icon size={14} />
                {label}
              </span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
