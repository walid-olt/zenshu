import "./index.css";
import routes from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter(routes);

const root = document.getElementById("root")!;

createRoot(root).render(<RouterProvider router={router} />);
