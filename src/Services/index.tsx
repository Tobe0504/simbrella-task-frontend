import axios from "axios";
import { config } from "../Configs";

export const axiosInstance = axios.create({
  baseURL: config?.base_url,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (axiosConfig) => {
    if (!navigator.onLine) {
      throw new Error("Please check your internet connection");
    }

    return axiosConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response;
    } else {
      throw new Error(
        response?.data?.error?.message || "An unknown error occured"
      );
    }
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
