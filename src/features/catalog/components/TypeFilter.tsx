import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ANIME_TYPES } from "@/lib/constants/";
import useSafeParams from "../hooks/useSafeParams";

function TypeFilter() {
  const [params, setParams] = useSafeParams();

  return (
    <div className="grid grid-cols-2 overflow-auto  ">
      {ANIME_TYPES.map((type) => {
        const isChecked = params.type === type;
        return (
          <div key={type} className="flex items-center gap-x-4 my-2 ">
            <Checkbox
              id={type}
              name={type}
              checked={isChecked}
              onCheckedChange={(checked) =>
                setParams({ type: checked === true ? type : undefined })
              }
            />
            <Label htmlFor={type}>{type.replace("_", " ")}</Label>
          </div>
        );
      })}
    </div>
  );
}

export default TypeFilter;
