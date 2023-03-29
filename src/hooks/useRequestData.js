import { useEffect, useState } from "react";
import axios from "axios";
import config from "../environments/config";

export function useRequestData(initialState, finalURL) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    axios
      .get(`${config.api_url}${finalURL}`, {
        headers: {
          ["x-api-key"]: "7f3ab3d1-7ec4-4e41-a610-d42185f11cc2",
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [finalURL]);

  return data;
}
