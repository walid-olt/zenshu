import OrderByFilter from "./OrderByFilter";
import SearchBar from "./SearchBar";
import SortType from "./SortTypeFilter";

function CatalogHeader() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-4 gap-4 my-4">
      <h2 className="text-2xl font-bold md:col-span-1">Catalog</h2>

      <div className="flex flex-wrap md:flex-nowrap items-center  gap-x-4 gap-y-4 md:col-span-3 sm:*:not-first:flex-2">
        <SearchBar />
        <OrderByFilter />
        <SortType />
      </div>
    </div>
  );
}

export default CatalogHeader;
