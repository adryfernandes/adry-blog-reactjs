import { useNavigate } from "react-router-dom";
import { Post } from "../../components/Post";
import { useRequestData } from "../../hooks/useRequestData";
import { goToPostDetailsPage } from "../../router/coordinates";

export function Home() {
  const navigate = useNavigate();
  const allPosts = useRequestData({}, "/post/list");

  const listPosts = () => {
    if (!allPosts) return <p>carregando</p>;

    const posts = allPosts.data || [];
    return posts.map((p) => {
      console.log(p);
      return (
        <Post
          key={p.uuid}
          title={p.title}
          description={p.description}
          createdAt={p.times.createdAt}
          tags={p.tags}
          onClick={() => goToPostDetailsPage(navigate, p.uuid)}
        />
      );
    });
  };

  return <section>{listPosts()}</section>;
}
