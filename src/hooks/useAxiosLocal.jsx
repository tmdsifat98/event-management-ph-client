import axios from "axios";

const axiosLocal = axios.create({
  baseURL: "https://event-management-server-topaz.vercel.app",
});
const useAxiosLocal = () => {
  return axiosLocal;
};

export default useAxiosLocal;
