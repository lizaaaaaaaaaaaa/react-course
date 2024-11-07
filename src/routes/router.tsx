import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/homePage/HomePage";
import UsersPage from "../pages/usersPage/UsersPage";
import PostsPage from "../pages/postsPage/PostsPage";
import CommentsPage from "../pages/commentsPage/CommentsPage";
import PostsWithCommentsPage from "../pages/postsWithCommentspage/PostsWithCommentsPage";
import ErrorLayout from "../layouts/ErrorLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: "/users", element: <UsersPage/>},
            {path: "/posts", element: <PostsPage/>},
            {path: "/comments", element: <CommentsPage/>},
            {path: "/posts&comments", element: <PostsWithCommentsPage/>}
        ],
        errorElement: <ErrorLayout/>
    }
]);

export default router;