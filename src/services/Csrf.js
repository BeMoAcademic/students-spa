import Api from "./Api";
import Cookie from "js-cookie";

export default {
  /**
   * Get cookies from the laravel end
   * 
   * @returns 
   */
  getCookie() {
    let token = Cookie.get("XSRF-TOKEN");

    if (token) {
      return new Promise((resolve) => {
        resolve(token);
      });
    }

    return Api.get("/sanctum/csrf-cookie", {
      baseURL: process.env.VUE_APP_API_URL,
    });
  },
};
