import IEndpoints from "../models/IEndpoints";

export const baseUrl: string = "https://jsonplaceholder.typicode.com";

export const endpoints: IEndpoints = {
    users: "/users",
    posts: "/posts",
    comments: "/comments"
}