import { Container, Content, Matters, Top } from "./styled";

export function Post() {
  return (
    <Container>
      <Content>
        <Top>
          <div>
            <h2>Como criar uma aplicação React</h2>
            <h4>
              Uma aplicação com create-react-app, contendo typescript e
              iniciando com ESLint e Prettier
            </h4>
          </div>
          <span id="date">10/11/2022</span>
        </Top>

        <Matters>
          <span>Assunto1</span>
          <span>Assunto2</span>
          <span>Assunto3</span>
          <span>Assunto3</span>
          <span>Assunto3</span>
          <span>Assunto3</span>
        </Matters>
      </Content>
    </Container>
  );
}
