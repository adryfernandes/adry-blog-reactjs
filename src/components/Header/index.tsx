import { Container, Icon, Button, SearchContent } from "./styled";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function Header() {
  const [clickButton, setClickButton] = useState(false);

  return (
    <Container>
      <h1>Anotações Adry</h1>
      <SearchContent>
        <input placeholder="Pesquisar anotação..." />
        <Button onClick={() => setClickButton(!clickButton)}>
          <Icon
            icon={faMagnifyingGlass}
            className={clickButton ? "click" : ""}
          />
        </Button>
      </SearchContent>
    </Container>
  );
}
