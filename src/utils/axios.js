import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  timeout: 2500,
});

export default api;
