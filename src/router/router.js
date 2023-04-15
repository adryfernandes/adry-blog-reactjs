import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreatePost } from "../pages/CreatePost";
import { DetailsPost } from "../pages/DetailsPost";
import { Home } from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "post/:uuid",
        element: <DetailsPost />,
      },
      {
        path: "create/post/:xApiKey",
        element: <CreatePost />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
