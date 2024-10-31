import React, {FC} from 'react';
import styles from "../Page.module.css"
import PostItem from "../../components/postItem/PostItem";
import useZustandStore from "../../stores/store";

const PostsPage: FC = () => {
    const {postsSlice} = useZustandStore();
    return (
        <ul className={styles.list}>
            {postsSlice.posts.map(post => <PostItem key={post.id} userId={post.userId} id={post.id} title={post.title}
                                                    body={post.body}/>)}
        </ul>
    );
};

export default PostsPage;