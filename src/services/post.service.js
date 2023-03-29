import axios from "axios";
import config from "../environments/config";

export const listPostsService = async (initialPage, offset, order = "ASC") => {
  const response = await axios.get(`${config.api_url}/post/list`, {
    params: {
      initialPage,
      offset,
      order,
    },
  });

  return response.data;
};
