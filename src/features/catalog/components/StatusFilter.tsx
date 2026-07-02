import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ANIME_STATUS } from "@/lib/constants/";
import useSafeParams from "../hooks/useSafeParams";

function StatusFilter() {
  const [params, setParams] = useSafeParams();

  return (
    <div>
      {ANIME_STATUS.map((status) => {
        const isChecked = params.status === status;
        return (
          <div key={status} className="flex items-center gap-x-4 my-2">
            <Checkbox
              id={status}
              name={status}
              checked={isChecked}
              onCheckedChange={(checked) =>
                setParams({ status: checked === true ? status : undefined })
              }
            />
            <Label htmlFor={status}>{status}</Label>
          </div>
        );
      })}
    </div>
  );
}

export default StatusFilter;
