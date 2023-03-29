import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Icon,
  Button,
  SearchContent,
  Content,
  Title,
} from "./styled";

export function Header() {
  const [clickButton, setClickButton] = useState(false);

  return (
    <Container>
      <Content>
        <Title>
          <h1> My Learnings Hub</h1>
          <h2>Adryane Fernandes</h2>
        </Title>
        <SearchContent>
          <input placeholder="Pesquisar anotação..." />
          <Button onClick={() => setClickButton(!clickButton)}>
            <Icon
              icon={faMagnifyingGlass}
              className={clickButton ? "click" : ""}
            />
          </Button>
        </SearchContent>
      </Content>
    </Container>
  );
}
