export const goToPostDetailsPage = (navigate, uuid) => {
  navigate(`/post/${uuid}`);
};

export const goToHome = (navigate) => {
  navigate(`/`);
};
