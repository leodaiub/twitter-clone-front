import axios from "axios";
// import store from "./e";

const api = axios.create({ baseURL: "http://localhost:3333/" });

// api.interceptors.request.use((config) => {
//   if (!!localStorage.token)
//     config.headers.Authorization = `Bearer ${localStorage.token}`;

//   return config;
// });

// api.interceptors.response.use(null, (error) => {
//   if (
//     error.response.status === 401 &&
//     error.response.data.message === "Unauthenticated."
//   ) {
//     localStorage.removeItem("token");
//     localStorage.removeItem("area_id");
//     document.location.reload();
//   }

//   if (
//     error.response.status === 400 &&
//     typeof error.response.data === "object"
//   ) {
//     error.response.data.forEach((error) =>
//       toast.error(i18n.t(`error:${error}`), { autoClose: 10000 })
//     );
//   }

//   return Promise.reject(error);
// });

export { api };
