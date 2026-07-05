import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useSafeParams from "../hooks/useSafeParams";
import type { SortOptions } from "@tutkli/jikan-ts";

export default function SortType() {
  const [params, setParams] = useSafeParams();

  return (
    <Select
      value={params.sort}
      onValueChange={(value) => setParams({ sort: (value as SortOptions) })}
    >
      <SelectTrigger className="flex-2 md:w-full ">
        <SelectValue placeholder="Sorty Type" />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectGroup>
          <SelectLabel>Sort Type</SelectLabel>
          <SelectItem value="asc">ascending</SelectItem>
          <SelectItem value="desc">descending</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
