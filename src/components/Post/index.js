import { Container, Content, Matters, Top } from "./styled";

export function Post(props) {
  // eslint-disable-next-line react/prop-types
  const { title, description, createdAt, matters, onClick } = props;

  // eslint-disable-next-line react/prop-types
  const listMatters = matters.map((m) => <span key={m}>{m}</span>);

  return (
    <Container onClick={onClick}>
      <Content>
        <Top>
          <div>
            <h2>{title}</h2>
            <h4>{description}</h4>
          </div>
          <span id="date">{createdAt}</span>
        </Top>

        <Matters>{listMatters}</Matters>
      </Content>
    </Container>
  );
}
