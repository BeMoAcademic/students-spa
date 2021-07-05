import axios from "axios";

const Api = axios.create({
  baseURL: process.env.VUE_APP_API_URL + "/api/",
  withCredentials: true
});

export default Api;