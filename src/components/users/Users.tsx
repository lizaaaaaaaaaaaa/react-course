import React, {FC, useEffect, useState} from 'react';
import {getUserPosts, getUsers} from "../services/api.services";
import IUser from "../../models/IUser";
import User from "../user/User";
import "./Users.css";
import IUserPost from "../../models/IUserPost";
import Post from "../posts/Post";

const Users: FC = () => {
    const [users, setUsers] = useState<IUser[] | null>(null);
    const [chosenUserId, setChosenUserId] = useState<number | null>(null)
    const [posts, setPosts] = useState<IUserPost[] | null>(null)

    useEffect((): void => {
        getUsers().then((values: IUser[]) => setUsers(values));
    }, [])

    useEffect((): void => {
        if (chosenUserId !== null) {
            getUserPosts(chosenUserId)
                .then(values => setPosts(values));
        }
    }, [chosenUserId]);

    const usersButtonClick = (id: number): void => {
        setChosenUserId(id);
    }

    return (
        <>
            <ul className="list">
                {users ? users.map((user: IUser) => <User key={user.id} id={user.id} firstName={user.firstName}
                                                          lastName={user.lastName}
                                                          usersButtonClick={usersButtonClick}/>) : null}
            </ul>
            <ul className="posts">
                {posts && posts.length > 0 ? (posts.map((post: IUserPost) => <Post key={post.id}
                                                                                   body={post.body}
                                                                                   id={post.id}
                                                                                   userId={post.userId}
                                                                                   reactions={post.reactions}
                                                                                   tags={post.tags}
                                                                                   title={post.title}
                                                                                   views={post.views}/>))
                    : (posts && posts.length === 0 ? <p>Даний користувач не має постів!</p> : null)}
            </ul>
        </>);
};

export default Users;