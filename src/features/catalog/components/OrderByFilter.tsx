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
import type { AnimeSearchOrder } from "@tutkli/jikan-ts";

export default function OrderByFilter() {
  const [params, setParams] = useSafeParams();

  return (
    <Select
      value={params.order_by}
      // type casting is okay here since everything passes thru the validation schema anyway
      onValueChange={(value) => setParams({ order_by: (value as AnimeSearchOrder)  })}
    >
      <SelectTrigger className="w-full flex-2 md:max-w-fit">
        <SelectValue placeholder="Order By" />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectGroup>
          <SelectLabel>Order By</SelectLabel>
          <SelectItem value="score">score</SelectItem>
          <SelectItem value="rank">rank</SelectItem>

          <SelectItem value="popularity">popularity</SelectItem>

          <SelectItem value="rating">rating</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
