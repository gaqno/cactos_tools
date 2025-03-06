/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
function createAxiosInstance(baseURL) {
    const axiosInstance = axios.create({
        baseURL,
        timeout: 10000,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("cactos_token")}`,
        },
    });
    return axiosInstance;
}
export default { createAxiosInstance };
