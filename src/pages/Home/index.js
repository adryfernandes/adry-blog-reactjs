import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EmptyPage } from "../../components/EmptyPage";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Loading } from "../../components/Loading";
import { Pagination } from "../../components/Pagination";
import { Post } from "../../components/Post";
import { goToPostDetailsPage } from "../../router/coordinates";
import { listPostsService } from "../../services/post.service.js";

export function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ message: "" });
  const [allPosts, setAllPosts] = useState({ data: [], count: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    listPostsService(currentPage, itemsPerPage)
      .then((res) => {
        setAllPosts(res);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.message) {
          setError({ message: err.response.data.message });
        }
        setLoading(false);
      });
  }, [currentPage, itemsPerPage]);

  const listPosts = allPosts.data.map((p) => (
    <Post
      key={p.uuid}
      title={p.title}
      description={p.description}
      createdAt={p.times.createdAt}
      tags={p.tags}
      onClick={() => goToPostDetailsPage(navigate, p.uuid)}
    />
  ));

  const onCloseModalError = () => setError({ message: "" });

  return (
    <>
      <ErrorMessage message={error.message} onClose={onCloseModalError} />
      <Loading loading={loading} />
      {!loading && (
        <>
          {listPosts}
          <Pagination
            items={allPosts}
            count={allPosts.count}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChage={handlePageChange}
          />
        </>
      )}

      {!allPosts.data.length && <EmptyPage />}
    </>
  );
}
