import React, {FC, useContext} from 'react';
import styles from "../Page.module.css"
import MainContext from "../../context/MainContextProvider";
import PostItem from "../../components/postItem/PostItem";

const PostsPage: FC = () => {
    const {postsSlice} = useContext(MainContext);
    return (
        <ul className={styles.list}>
            {postsSlice.posts.map(post => <PostItem key={post.id} userId={post.userId} id={post.id} title={post.title}
                                                    body={post.body}/>)}
        </ul>
    );
};

export default PostsPage;