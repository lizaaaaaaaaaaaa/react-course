import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/MainPage";
import RecipesPage from "../pages/RecipesPage";
import RecipePage from "../pages/RecipePage";
import ErrorLayout from "../layouts/ErrorLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: "recipes",
                element: <RecipesPage/>,
            },
            {
                path: "recipes/:id", element: <RecipePage/>
            }
        ],
        errorElement: <ErrorLayout/>
    },
]);

export default router;