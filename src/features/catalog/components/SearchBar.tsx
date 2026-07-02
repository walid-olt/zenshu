import {
  MagnifyingGlassIcon as Search,
  XIcon as Reset,
} from "@phosphor-icons/react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import useSafeParams from "../hooks/useSafeParams";
import { Button } from "@/components/ui/button";

export default function SearchBar() {
  const [params, setParams] = useSafeParams();
  const q = params.q;
  return (
    <InputGroup className="max-w-full">
      <InputGroupInput
        value={q ?? ""}
        onChange={({ target: { value } }) => {
          setParams({ q: value });
        }}
        placeholder="Demon slayer..."
      />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      {q && (
        <InputGroupAddon align={"inline-end"}>
          <Button
            variant={"ghost"}
            size={"icon-xs"}
            onClick={() => setParams({ q: "" })}
          >
            <Reset />
          </Button>
        </InputGroupAddon>
      )}
    </InputGroup>
  );
}
