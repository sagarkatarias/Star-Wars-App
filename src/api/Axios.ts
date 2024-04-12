import axios from "axios";

// Create an axios instance to fetch from swapi.dev
const apiInstance = axios.create({
  baseURL: `https://swapi.${import.meta.env.VITE_ENV}/api/`,
  timeout: 1000,
});

// Handle errors
apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default apiInstance;
