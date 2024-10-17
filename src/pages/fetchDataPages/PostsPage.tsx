import React, {FC, useEffect, useState} from 'react';
import {getData} from "../../services/api_services";
import {IPost} from "../../models/IPost";
import styles from "./FetchDataPages.module.css"

const PostsPage: FC = () => {
    const [posts, setPosts] = useState<IPost[] | null>(null);

    useEffect(() => {
        getData<IPost>("posts", 15).then(posts => setPosts(posts));
    }, []);
    return (
        <ul className={`container ${styles.list}`}>
            {posts?.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
    );
};

export default PostsPage;