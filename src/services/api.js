import axios from "axios";
import store from "store";

const api = axios.create({ baseURL: "http://localhost:3333/" });

api.interceptors.request.use((config) => {
  if (!!store.get("token"))
    config.headers.Authorization = `Bearer ${store.get("token")}`;

  return config;
});

api.interceptors.response.use(null, (error) => {
  if (error.response.status === 401) {
    store.remove("token");
  }

  return Promise.reject(error);
});

export { api };
