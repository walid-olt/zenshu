import OrderByFilter from "./OrderByFilter";

function CatalogHeader() {
  return (
    <div className="flex items-center justify-between my-4">
      <h2 className="text-2xl font-bold ">Catalog</h2>
      <OrderByFilter />
    </div>
  );
}

export default CatalogHeader;
