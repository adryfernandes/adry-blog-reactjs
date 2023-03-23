import { Container, Icon, Button, SearchContent, Content } from "./styled";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function Header() {
  const [clickButton, setClickButton] = useState(false);

  return (
    <Container>
      <Content>
        <h1>Anotações da Adry</h1>
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
