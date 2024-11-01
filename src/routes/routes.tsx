import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/mainLayout/MainLayout";
import HomePage from "../pages/homePage/HomePage";
import UsersPage from "../pages/usersPage/UsersPage";
import PostsPage from "../pages/postsPage/PostsPage";
import PostsWithCommentsPage from "../pages/postsWithCommentsPage/PostsWithCommentsPage";
import CommentsPage from "../pages/commentsPage/CommentsPage";
import ErrorLayout from "../layouts/errorLayout/ErrorLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "users",
                element: <UsersPage/>
            },
            {
                path: "posts",
                element: <PostsPage/>
            },
            {
                path: "comments",
                element: <CommentsPage/>
            },
            {
                element: <PostsWithCommentsPage/>,
                path: "posts&comments"
            }
        ],
        errorElement: <ErrorLayout/>
    }
])