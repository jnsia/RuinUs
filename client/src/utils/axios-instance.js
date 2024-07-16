import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 1000,
  headers: { 
    accept: '*/*',
    "Content-Type": "application/json;charset=UTF-8"
  },
  withCredentials: true,
});

export default axiosInstance;
