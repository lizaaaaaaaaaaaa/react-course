import {configureStore} from "@reduxjs/toolkit";
import {usersSlice, loadUsers} from "./slices/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {postsSlice, loadPosts} from "./slices/postSlice";
import {commentsSlice, loadComments} from "./slices/commentsSlice";

export const store= configureStore(
    {
        reducer: {
            usersSlice: usersSlice.reducer,
            postsSlice: postsSlice.reducer,
            commentsSlice: commentsSlice.reducer
        }
    }
)

const usersActions = {...usersSlice.actions, loadUsers};
const postsActions = {...postsSlice.actions, loadPosts};
const commentsActions = {...commentsSlice.actions, loadComments};

const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

export {
    usersActions,
    postsActions,
    commentsActions,
    useAppSelector,
    useAppDispatch
}