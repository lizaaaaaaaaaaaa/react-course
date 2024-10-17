import React, {FC, useEffect, useState} from 'react';
import {getData} from "../../services/api_services";
import {IPost} from "../../models/IPost";
import styles from "./FetchDataPages.module.css"
import PostsItem from "../../components/postsItem/PostsItem";

const PostsPage: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getData<IPost>("posts", 15).then(posts => setPosts(posts));
    }, []);
    return (
        <ul className={`container ${styles.list}`}>
            {posts.map(post => <PostsItem key={post.id} userId={post.userId} id={post.id} title={post.title} body={post.body}/>)}
        </ul>
    );
};

export default PostsPage;