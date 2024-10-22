import axios from "axios";
import {baseUrl, usersEndpoint} from "../constants/urls";
import IFormFields from "../models/IFormFields";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {"Content-Type": "application/json"}
});

const registerNewUser = async (newUser:IFormFields):Promise<IFormFields> => {
    return (await axiosInstance.post<IFormFields>(usersEndpoint, newUser)).data;
}

export default registerNewUser;

