import axios from "axios";

export let Axios = undefined;

export const createEnv = (config) => {
  Axios = axios.create({
    baseURL: "http://localhost:8000",
    // timeout: 1000,
    headers: {
      "Content-Type": "application/json",
      Authorization: (config && `Token ${config.token}`) || "",
    },
  });
};

export default createEnv();
