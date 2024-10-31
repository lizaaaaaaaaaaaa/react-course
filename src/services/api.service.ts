import axios from "axios";
import {baseUrl} from "../constants/JP.urls"

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {"Content-Type": "application/json"}
})

export const getData = async <T>(endpoint:string):Promise<T> => {
    return (await axiosInstance.get<T>(endpoint)).data;
}