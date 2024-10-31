import React, {FC, useEffect, useState} from 'react';
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import {Outlet} from "react-router-dom";
import MainContext from "../../context/MainContextProvider";
import IUser from "../../models/IUser";
import IPost from "../../models/IPost";
import IComment from "../../models/IComment";
import {getData} from "../../services/api.service";
import {endpoints} from "../../constants/JP.urls";

const MainLayout: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        getData<IUser[]>(endpoints.users).then(values => setUsers(values));
        getData<IPost[]>(endpoints.posts).then(values => setPosts(values));
        getData<IComment[]>(endpoints.comments).then(values => setComments(values));
    }, []);

    return (
        <MainContext.Provider value={{
            usersSlice: {
                users: users
            },
            postsSlice: {
                posts: posts
            },
            commentsSlice: {
                comments: comments
            },
            postsWithCommentsSlice: {
                postsWithComments: posts.map(post => {
                    return {...post, comments: comments.filter(comment => comment.postId === post.id)}
                })
            }
        }}>
            <HeaderComponent/>
            <Outlet/>
        </MainContext.Provider>
    );
};

export default MainLayout;