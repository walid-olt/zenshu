import CatalogHeader from "../components/CatalogHeader";
import { Filter, Filters } from "../components/Filters";

export function Component() {
  return (
    <section className="px-8 py-12">
      <CatalogHeader />
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1 ">
          <Filters />
        </div>
        <div className="col-span-3 bg-green-100">2/3 Width (~66.6%)</div>
      </div>
    </section>
  );
}
