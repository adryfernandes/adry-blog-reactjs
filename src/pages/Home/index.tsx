import { Post } from "../../components/Post";
import { Main } from "./styled";

export function Home() {
  const posts = [
    {
      title: "post1",
      description: "Descrição",
      content: "<div>Eae bixa</div>",
    },
  ];

  return (
    <Main>
      <Post />
      <Post />
    </Main>
  );
}
