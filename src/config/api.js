import axios from "axios";

const api = axios.create({
  baseURL: "https://api.unsplash.com/",
  params: {
    client_id: process.env.REACT_APP_UNSPLASH_API_KEY,
  },
});

export default api;
