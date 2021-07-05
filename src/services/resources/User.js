import Api from "../Api";
import Csrf from "../Csrf";

export default {
  /**
   * Register user
   *
   * @param {*} form
   * @returns
   */
  async register(form) {
    await Csrf.getCookie();

    return Api.post("/auth/register", form);
  },

  /**
   * Login action
   *
   * @param {*} form
   * @returns
   */
  async login(form) {
    await Csrf.getCookie();

    return Api.post("/auth/login", form, {
      baseURL: process.env.VUE_APP_API_URL
    });
  },
  /**
   * Logout action
   * 
   * @returns
   */
  async logout() {
    await Csrf.getCookie();

    return Api.post("/logout");
  },

  auth() {
    return Api.get("/user");
  },
};
