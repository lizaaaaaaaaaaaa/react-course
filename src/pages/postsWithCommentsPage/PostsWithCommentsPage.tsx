import React, {FC} from 'react';
import useZustandStore from "../../stores/store";
import PostWithCommentsItem from "../../components/postWithComments/PostWithCommentsItem";
import styles from "../Page.module.css"

const PostsWithCommentsPage: FC = () => {
    const {postsWithCommentsSlice} = useZustandStore();
    return (
        <ul className={styles.list}>
            {postsWithCommentsSlice.postsWithComments.map(item => <PostWithCommentsItem key={item.id}
                                                                                        comments={item.comments}
                                                                                        userId={item.userId}
                                                                                        id={item.id} title={item.title}
                                                                                        body={item.body}/>)}
        </ul>
    );
};

export default PostsWithCommentsPage;