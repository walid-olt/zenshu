import { MagnifyingGlassIcon as Search } from "@phosphor-icons/react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import useSafeParams from "../hooks/useSafeParams";

export default function SearchBar() {
  const [params, setParams] = useSafeParams();
  const q = params.q;
  return (
    <InputGroup className="max-w-full">
      <InputGroupInput
        value={q}
        onChange={({ target: { value } }) => {
          setParams({ q: value });
        }}
        placeholder="Demon slayer..."
      />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
    </InputGroup>
  );
}
