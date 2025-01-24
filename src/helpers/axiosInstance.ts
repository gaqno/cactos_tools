/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
function createAxiosInstance(baseURL: string) {
  const axiosInstance = axios.create({
    baseURL,
    timeout: 10000,
  });

  return axiosInstance;
}

export default { createAxiosInstance };
