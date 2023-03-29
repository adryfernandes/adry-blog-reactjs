import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
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
    ],
  },
]);

export function Router() {
  return (
    <>
      <Header />
      <Main>
        <RouterProvider router={router} />
      </Main>
      <Footer />
    </>
  );
}
