import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  EmptyPage,
  ErrorMessage,
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

  const [state, setState] = useState({
    loading: true,
    error: { message: "" },
    allPosts: { data: [], count: 0 },
    currentPage: 1,
    itemsPerPage: 5,
  });

  const handlePageChange = (pageNumber) => {
    setState({ ...state, pageNumber });
  };

  const init = () => {
    if (location.pathname.includes("result") && !search) {
      setState({ ...state, allPosts: { data: [], count: 0 } });
    } else {
      list();
    }
  };

  const list = async () => {
    try {
      const { currentPage, itemsPerPage } = state;
      const allPosts = await listPostsService(
        search,
        currentPage,
        itemsPerPage
      );

      setState({ ...state, allPosts, loading: false });
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setState({ ...state, error: err.response.data.message });
      }
      setState({ ...state, loading: false });
    }
  };

  useEffect(() => {
    init();
  }, [state.currentPage, state.itemsPerPage, search]);

  const listPosts = state.allPosts.data.map((p) => (
    <Post
      key={p.uuid}
      title={p.title}
      description={p.description}
      createdAt={p.times.createdAt}
      tags={p.tags}
      onClick={() => goToPostDetailsPage(navigate, p.uuid)}
    />
  ));

  const onCloseModalError = () =>
    setState({ ...state, error: { message: "" } });

  return (
    <BasePage navigate={navigate}>
      <ErrorMessage message={state.error.message} onClose={onCloseModalError} />
      <Loading loading={state.loading} />
      {!state.loading && (
        <>
          {listPosts}
          <Pagination
            items={state.allPosts}
            count={state.allPosts.count}
            itemsPerPage={state.itemsPerPage}
            currentPage={state.currentPage}
            onPageChage={handlePageChange}
          />
        </>
      )}

      {!state.allPosts.data.length && <EmptyPage />}
    </BasePage>
  );
}
