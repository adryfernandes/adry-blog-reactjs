import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { ErrorMessage } from "../../components/AlertMessage";
import { Loading } from "../../components/Loading";
import { goToHome } from "../../router/coordinates";
import { getPost } from "../../services/post.service";
import { Container } from "./styled";
import { BasePage } from "..";

export function DetailsPost() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ message: "" });
  const [post, setPosts] = useState({});

  const navigate = useNavigate();
  const { uuid } = useParams();
  if (!uuid) {
    goToHome(navigate);
  }

  const handlePost = async () => {
    try {
      const post = await getPost(uuid);

      setPosts(post);
      setLoading(false);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError({ message: err.response.data.message });
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    handlePost();
  }, []);

  const onCloseModalError = () => setError({ message: "" });

  const tags = post && post.tags;
  const listTags =
    tags && tags.map((tag) => <span key={tag.uuid}>{tag.title}</span>);

  return (
    <BasePage navigate={navigate}>
      <Container>
        <ErrorMessage message={error.message} onClose={onCloseModalError} />
        <Loading loading={loading} />

        {!loading && (
          <>
            <div id="title">
              <h1>{post.title}</h1>
              <h3>{post.description}</h3>
              <p id="date">
                {post &&
                  post.times &&
                  post.times.createdAt &&
                  dayjs(post.times.createdAt).format("DD/MM/YYYY")}
              </p>
              {listTags}
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </>
        )}
      </Container>
    </BasePage>
  );
}
