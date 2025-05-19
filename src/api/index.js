import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    console.log("Request gönderiliyor:", config);
    return config;
  },
  (error) => {
    console.log("Request hatası: ", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("Response geldi:", response);
    return response;
  },
  (error) => {
    console.log("Response hatası:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
