import GlobalError from "@/components/GlobalError";
import GlobalLoading from "@/components/GlobalLoading";
import Layout from "@/components/Layout";
import HomePage from "@/features/homepage/pages/HomePage";
import type { RouteObject } from "react-router";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <GlobalError />,
    children: [
      {
        path: "/",
        index: true,
        hydrateFallbackElement: <GlobalLoading />,
        element: <HomePage />,
      },
      {
        path: "/catalog",
        hydrateFallbackElement: <GlobalLoading />,
        lazy: () => import("@/features/catalog/pages/CatalogPage"),
      },
      {
        path: "/characters",
        hydrateFallbackElement: <GlobalLoading />,
        lazy: () => import("@/features/characters/pages/CharactersPage"),
      },
      {
        path: "/library",
        hydrateFallbackElement: <GlobalLoading />,
        lazy: () => import("@/features/library/pages/LibraryPage"),
      },
    ],
  },
];

export default routes;
