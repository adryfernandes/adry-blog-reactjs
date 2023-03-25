import { Post } from "../../components/Post";
import { goToPostDetailsPage } from "../../router/coordinates";

export function Home() {
  const postsMock = [
    {
      title: "post1",
      description: "Descrição",
      content: "<div>Eae bixa</div>",
      uuid: "123",
      created_at: "10/02/2023",
      matters: ["ReactJs", "typescript", "eslint"],
    },
    {
      title: "post1",
      description: "Descrição",
      content: "<div>Eae bixa</div>",
      uuid: "123",
      created_at: "10/02/2023",
      matters: ["ReactJs", "typescript", "eslint"],
    },
  ];

  const listOfPosts = postsMock.map((p) => {
    return (
      <Post
        key={p.uuid}
        title={p.title}
        description={p.description}
        createdAt={p.created_at}
        matters={p.matters}
        onClick={() => goToPostDetailsPage(p.uuid)}
      />
    );
  });

  return <section>{listOfPosts}</section>;
}
