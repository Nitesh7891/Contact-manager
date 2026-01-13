import axios from "axios";

const contactApi = axios.create({
  baseURL: "http://localhost:5000/api"
});

// Attach token automatically
contactApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = token;
  return config;
});

export default contactApi;
