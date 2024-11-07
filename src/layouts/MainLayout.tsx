import React, {FC, useEffect} from 'react';
import HeaderComponent from "../components/headerComponent/HeaderComponent";
import {Outlet} from "react-router-dom";
import {commentsActions, postsActions, useAppDispatch, usersActions} from "../redux/store";

const MainLayout:FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(usersActions.loadUsers());
        dispatch(postsActions.loadPosts());
        dispatch(commentsActions.loadComments());
    }, []);

    return (
        <>
            <HeaderComponent/>
            <Outlet/>
        </>
    );
};

export default MainLayout;