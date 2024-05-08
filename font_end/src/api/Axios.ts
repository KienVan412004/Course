import axios from "axios";
const user = localStorage.getItem("userName");
const pass = localStorage.getItem("password");
const axiosAll = axios.create({
  baseURL: "http://localhost:8081/api/",
  auth: {
    username: user || "namlon@gmail.com",
    password: pass || "123456",
  },
});
export default axiosAll;
