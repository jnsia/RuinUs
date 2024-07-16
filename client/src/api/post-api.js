import axiosInstance from "../utils/axios-instance";

const url = "/content";
const token = localStorage.getItem("@isLogin");

const api = {
  fetchPost: () => axiosInstance.get(`${url}/${token}`),
  fetchDetail: (postId) => axiosInstance.get(`${url}/${postId}/${token}`),
  createPost: (request) => axiosInstance.post(`${url}/${token}`, request),
  updatePost: (request, postId) =>
    axiosInstance.post(`${url}/rewrite/${postId}/${token}`, request),
};

export default api;
