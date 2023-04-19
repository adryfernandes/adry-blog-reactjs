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
import { goToHome, goToResult } from "../../router/coordinates";
import { useForm } from "../../hooks/useForm";

export function Header({ navigate }) {
  const [clickButton, setClickButton] = useState(false);
  const [{ search }, onChange] = useForm({ search: "" });

  const onSearchButton = () => {
    setClickButton(true);

    if (navigate) {
      goToResult(navigate, search);
    }
  };

  const onKeyDown = (e) => {
    if (e.code === "Enter") {
      onSearchButton();
    }
  };

  return (
    <Container>
      <Content>
        <Title onClick={() => navigate && goToHome(navigate)}>
          <h1> My Learnings Hub</h1>
          <h2>Adryane Fernandes</h2>
        </Title>

        <SearchContent>
          <input
            placeholder="Pesquisar anotação..."
            name="search"
            value={search}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <Button onClick={onSearchButton}>
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
