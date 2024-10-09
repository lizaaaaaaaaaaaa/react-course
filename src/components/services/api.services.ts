import IUser from "../../models/IUser";
import axios from "axios";
import IUserPost from "../../models/IUserPost";

interface IUsersResponse {
    limit: number;
    skip: number;
    total: number;
    users: IUser[];
}

interface IPostsResponse {
    limit: number;
    skip: number;
    total: number;
    posts: IUserPost[];
}

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {"Content-Type": "application/json"}
});

export const getUsers = async (): Promise<IUser[]> => {
    const response = await axiosInstance.get<IUsersResponse>("/users?limit=15");
    return response.data.users;
}

export const getUserPosts = async (id: number): Promise<IUserPost[]> => {
    const response = await axiosInstance.get<IPostsResponse>("/posts/user/" + id);
    return response.data.posts;
}