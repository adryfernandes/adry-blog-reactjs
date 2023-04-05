import dayjs from "dayjs";
import { Container, Content, Matters, Top } from "./styled";

export function Post(props) {
  // eslint-disable-next-line react/prop-types
  const { title, description, createdAt, tags, onClick } = props;

  // eslint-disable-next-line react/prop-types
  const listMatters =
    tags && tags.map((m) => <span key={m.uuid}>{m.title.toUpperCase()}</span>);

  return (
    <Container onClick={onClick}>
      <Content>
        <Top>
          <div>
            <h2>{title}</h2>
            <h4>{description}</h4>
          </div>
          <span id="date">{dayjs(createdAt).format("DD/MM/YYYY")}</span>
        </Top>

        <Matters>{listMatters}</Matters>
      </Content>
    </Container>
  );
}
