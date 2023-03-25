import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Home } from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "post/:uuid",
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
