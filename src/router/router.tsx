import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export function Router() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}
