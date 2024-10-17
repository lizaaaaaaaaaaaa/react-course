import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/mainLayout/MainLayout";
import MainPage from "../pages/mainPage/MainPage";
import UsersPage from "../pages/fetchDataPages/UsersPage";
import PostsPage from "../pages/fetchDataPages/PostsPage";
import CommentsPage from "../pages/fetchDataPages/CommentsPage";
import ErrorLayout from "../layouts/errorLayout/ErrorLayout";


export const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>, children: [
            {index: true, element: <MainPage/>},
            {path: "users", element: <UsersPage/>},
            {path: "posts", element: <PostsPage/>},
            {path: "comments", element: <CommentsPage/>}
        ],
        errorElement: <ErrorLayout/>
    },
])