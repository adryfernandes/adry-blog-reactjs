import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export function BasePage({ children, navigate }) {
  return (
    <>
      <Header navigate={navigate} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
