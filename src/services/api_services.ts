import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {"Content-Type": "application/json"}
})

export const getData = async <T>(endPoint: string, limit: number): Promise<T[]> => {
    const response = await axiosInstance.get<T[]>(`/${endPoint}?_limit=${limit}`)
    return response.data
}