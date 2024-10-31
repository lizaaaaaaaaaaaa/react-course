import IContext from "../models/IContext";
import {createContext} from "react";

const defaultContextValues: IContext = {
    usersSlice: {
        users: []
    },
    postsSlice: {
        posts: []
    },
    commentsSlice: {
        comments: []
    },
    postsWithCommentsSlice: {
        postsWithComments: []
    }
}

const MainContext = createContext<IContext>(defaultContextValues);
export default MainContext;