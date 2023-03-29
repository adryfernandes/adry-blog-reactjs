import { useNavigate, useParams } from "react-router-dom";
import { goToHome } from "../../router/coordinates";
import { Container } from "./styled";

export function DetailsPost() {
  const navigate = useNavigate();
  const { uuid } = useParams();
  if (!uuid) {
    goToHome(navigate);
  }

  const post = {};

  const tags = post && post.tags;
  const listTags =
    tags && tags.map((tag) => <span key={tag.uuid}>{tag.title}</span>);

  return (
    <Container>
      <div id="title">
        <h1>{post.title}</h1>
        <h3>{post.description}</h3>
        <p id="date">{post && post.times && post.times.createdAt}</p>
        {listTags}
      </div>

      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Container>
  );
}
