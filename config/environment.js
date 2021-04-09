import axios from "axios";

export let Axios = undefined;

export const createEnv = (config) => {
  Axios = axios.create({
    baseURL: "https://staging-adpitchers.herokuapp.com/",
    // timeout: 1000,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: (config && `Token ${config.token}`) || "",
    },
  });
};

export default createEnv();
