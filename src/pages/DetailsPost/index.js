import { Container } from "./styled";

export function DetailsPost() {
  const postMock = {
    title: "Como criar uma aplicação react",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    content: "<div>Eae bixa<p>título</p></div>",
    uuid: "123",
    created_at: "10/02/2023",
    matters: ["ReactJs", "typescript", "eslint"],
  };

  return (
    <Container>
      <div id="title">
        <h1>{postMock.title}</h1>
        <h3>{postMock.description}</h3>
        <p id="date">{postMock.created_at}</p>
      </div>

      <div dangerouslySetInnerHTML={{ __html: postMock.content }} />
    </Container>
  );
}
