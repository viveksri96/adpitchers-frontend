import axios from "axios";

export let Axios = undefined;

export const createEnv = (config) => {
  Axios = axios.create({
    baseURL: "https://staging-api.adpitchers.com",
    // timeout: 1000,
    headers: {
      "Content-Type": "application/json",
      Authorization: (config && `Token ${config.token}`) || "",
    },
  });
};

export default createEnv();
