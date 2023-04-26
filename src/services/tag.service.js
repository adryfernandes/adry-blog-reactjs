import axios from "axios";
import config from "../environments/config";

export const listTagsService = async () => {
  const response = await axios.get(`${config.api_url}/tag/list`);
  return response.data;
};
