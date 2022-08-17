import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

import { baseURL } from "../Utils";
import router from '../routes'

const useAxios = () => {
  const authTokens = JSON.parse(localStorage.getItem("auth"));
  console.log("authTokens",authTokens)
  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: "Bearer " + authTokens?.access },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    const user = jwt_decode(authTokens?.access);
    
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    
    if (!isExpired) return req;
    const response = await axios
      .post(`${baseURL}/token/refresh/`, {
        refresh: authTokens.refresh,
      })
      .catch(function (error) {
        console.log("errorrrrrrrrrrrrrrrrrrrrrrrrrr", error);
        localStorage.clear();
        router.push({ name: "Login" });
      });

    const old_auth = JSON.parse(localStorage.getItem("auth"));
    const auth = { ...old_auth, ...response.data.data };

    localStorage.setItem("auth", JSON.stringify(auth));
    
    req.headers.Authorization = response.data.data.access;
    return req;
  });

  axiosInstance.interceptors.response.use(
    function (success) {
      return success;
    },
    function (error) {
        
        console.log("check",error)
        if (error.response.status === 401) {
            localStorage.clear();
            router.push({ name: "Login" });
        }



      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxios;
