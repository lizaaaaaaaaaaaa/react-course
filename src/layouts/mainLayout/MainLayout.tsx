import React, {FC, useEffect} from 'react';
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import {Outlet} from "react-router-dom";
import IUser from "../../models/IUser";
import IPost from "../../models/IPost";
import IComment from "../../models/IComment";
import {getData} from "../../services/api.service";
import {endpoints} from "../../constants/JP.urls";
import useZustandStore from "../../stores/store";

const MainLayout: FC = () => {

    const {usersSlice, postsSlice, commentsSlice, postsWithCommentsSlice} = useZustandStore()

    useEffect(() => {
        getData<IUser[]>(endpoints.users).then(values => usersSlice.setUsers(values));
        getData<IPost[]>(endpoints.posts).then(values => postsSlice.setPosts(values));
        getData<IComment[]>(endpoints.comments).then(values => {
            commentsSlice.setComments(values);
            postsWithCommentsSlice.setPostsWithComments(
                postsSlice.posts.map(post => {
                    return {
                        ...post,
                        comments:
                            values.filter(value => value.postId === post.id)
                    }
                })
            )

        });
    }, []);

    return (
        <>
            <HeaderComponent/>
            <Outlet/>
        </>
    );
};

export default MainLayout;