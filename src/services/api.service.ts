import axios from "axios";
import {baseUrl} from "../constants/urls";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {"Content-Type": "application/json"}
})

const getDataByEndpoint = async <T>(endpoint:string):Promise<T[]> => {
    return (await axiosInstance.get<T[]>(endpoint)).data;
}

export default getDataByEndpoint;