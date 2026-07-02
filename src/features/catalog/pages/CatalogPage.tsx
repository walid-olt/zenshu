import Error from "@/components/Error";
import Catalog from "../components/Catalog";
import CatalogHeader from "../components/CatalogHeader";
import { Filters } from "../components/Filters";
import { ErrorBoundary } from "react-error-boundary";

export function Component() {
  return (
    <section className="px-8 py-4">
      <CatalogHeader />
      <div className="grid grid-cols-4 gap-4 items-start">
        <aside className="col-span-1 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
          <Filters />
        </aside>
        <div className="col-span-3 h-[calc(100vh-7rem)] overflow-y-auto rounded-md py-4">
          <ErrorBoundary
            fallback={
              <Error
                resetErrorBoundary={() => {
                  window.location.search = "";
                }}
                title="Couldn't get anime data"
                description="Something went wrong while fetching data, check your connection and try again "
              />
            }
          >
            <Catalog />
          </ErrorBoundary>
        </div>
      </div>
    </section>
  );
}
