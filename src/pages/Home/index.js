import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  EmptyPage,
  AlertMessage,
  Loading,
  Pagination,
  Post,
} from "../../components";
import { goToPostDetailsPage } from "../../router/coordinates";
import { listPostsService } from "../../services/post.service.js";
import { BasePage } from "..";

export function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("search");

  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({ message: "", severety: "" });
  const [allPosts, setAllPosts] = useState({ data: [], count: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const init = () => {
    if (location.pathname.includes("result") && !search) {
      setAllPosts({ data: [], count: 0 });
    } else {
      list();
    }
  };

  const list = async () => {
    try {
      const posts = await listPostsService(search, currentPage, itemsPerPage);

      setAllPosts(posts);
      setLoading(false);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setAlert({ message: err.response.data.message });
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, [currentPage, itemsPerPage, search]);

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

  const onCloseModal = () => setAlert({ message: "", severety: "" });

  return (
    <BasePage navigate={navigate}>
      <AlertMessage message={alert.message} onClose={onCloseModal} />
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
    </BasePage>
  );
}
