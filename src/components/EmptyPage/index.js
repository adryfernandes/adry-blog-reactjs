import { ReactComponent as IconEmptyPage } from "../../assets/emptyPage.svg";
import { Container } from "./styled";

export function EmptyPage() {
  return (
    <Container>
      <IconEmptyPage />
      <p>Listagem vazia</p>
    </Container>
  );
}
