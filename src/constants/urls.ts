import IEndpoints from "../models/IEndpoints";

const baseUrl = "https://jsonplaceholder.typicode.com";

const endpoints: IEndpoints = {
    users: "/users",
    posts: "/posts",
    comments: "/comments"
}

export {
    baseUrl,
    endpoints
}