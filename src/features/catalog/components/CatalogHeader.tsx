import OrderByFilter from "./OrderByFilter";
import SearchBar from "./SearchBar";
import SortType from "./SortTypeFilter";

function CatalogHeader() {
  return (
    <div className="flex flex-col md:grid grid-cols-4 gap-4 my-4">
      <h2 className="text-2xl font-bold col-span-1">Catalog</h2>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 col-span-3">
        <SearchBar />
        <OrderByFilter />
        <SortType />
      </div>
    </div>
  );
}

export default CatalogHeader;
