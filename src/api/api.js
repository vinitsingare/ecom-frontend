import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_BACK_END_URL}/api`,
    withCredentials: true,
});

// Add interceptor to include JWT token in requests
api.interceptors.request.use(
  (config) => {
    const authData = localStorage.getItem("auth");

    if (authData) {
      try {
        const user = JSON.parse(authData);
        let token = user?.jwtToken;

        if (token) {
          token = token.replace("Bearer ", "").trim();  // 🔥 FIX
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (e) {
        console.error("Error parsing auth data:", e);
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor for error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log("API Error:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default api;
