import Error from "@/components/Error";
import Catalog from "../components/Catalog";
import CatalogHeader from "../components/CatalogHeader";
import { Filters } from "../components/Filters";
import { ErrorBoundary } from "react-error-boundary";
import { useSearchParams } from "react-router";

export function Component() {
  const [, setParams] = useSearchParams()
  return (
    <section className="px-4 md:px-8 py-4">
      <CatalogHeader />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
        <aside className="md:col-span-1 md:sticky md:top-24 md:self-start md:max-h-[calc(100vh-7rem)] md:overflow-y-auto md:pr-2">
          <Filters />
        </aside>
        <div className="md:col-span-3 rounded-md py-4">
          <ErrorBoundary
            fallbackRender={(props)=>
              <Error 
                {...props}
                resetErrorBoundary={()=>setParams("")}
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
