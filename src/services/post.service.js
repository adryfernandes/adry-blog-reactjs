import axios from "axios";
import config from "../environments/config";

/**
 * Lista os posts feitos
 * @param {*} initialPage - página inicial
 * @param {*} offset  - itens por página
 * @param {*} order - ascendente ou descendente (por data de criação)
 * @returns
 */
export const listPostsService = async (
  search,
  initialPage,
  offset,
  order = "ASC"
) => {
  const response = await axios.get(`${config.api_url}/post/list`, {
    params: {
      initialPage,
      offset,
      order,
      search,
    },
  });

  return response.data;
};

export const getPost = async (uuid) => {
  const response = await axios.get(`${config.api_url}/post/${uuid}`);
  return response.data;
};
