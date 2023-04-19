export const goToPostDetailsPage = (navigate, uuid) => {
  navigate(`/post/${uuid}`);
};

export const goToHome = (navigate) => {
  navigate("/");
};

export const goToResult = (navigate, search = "") => {
  navigate(`/result/?search=${search}`);
};
