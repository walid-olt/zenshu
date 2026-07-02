import Catalog from "../components/Catalog";
import CatalogHeader from "../components/CatalogHeader";
import { Filters } from "../components/Filters";

export function Component() {
  return (
    <section className="px-8 py-4">
      <CatalogHeader />
      <div className="grid grid-cols-4 gap-4 items-start">
        <aside className="col-span-1 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
          <Filters />
        </aside>
        <div className="col-span-3 h-[calc(100vh-7rem)] overflow-y-auto rounded-md p-4">
          <Catalog />
        </div>
      </div>
    </section>
  );
}
