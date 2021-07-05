import Api from "../Api";
import Csrf from "../Csrf";

export default {
  /**
   * Get student welcome page
   * 
   * @returns 
   */
  async studentDashboard() {
    await Csrf.getCookie();

    return Api.get("/student/welcome");
  }
};