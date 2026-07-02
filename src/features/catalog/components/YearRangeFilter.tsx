import { Input } from "@/components/ui/input";
import useSafeParams from "../hooks/useSafeParams";

function YearRangeFilter() {
  const [params, setParams] = useSafeParams();
  const { end_date, start_date } = params;
  return (
    <div className="flex items-center ">
      <Input
        min={1963}
        max={2026}
        inputMode="numeric"
        type="number"
        value={start_date}
        maxLength={4}
        placeholder="1963"
        onChange={(e) => {
          setParams({ start_date: e.target.value });
        }}
      />
      <hr className="w-full" />

      <Input
        type="number"
        min={1963}
        max={2026}
        maxLength={4}
        value={end_date}
        placeholder="2026"
        onChange={(e) => {
          setParams({ end_date: e.target.value });
        }}
      />
    </div>
  );
}

export default YearRangeFilter;
