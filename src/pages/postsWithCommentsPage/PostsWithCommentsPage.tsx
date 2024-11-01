import React, {FC, useEffect, useState} from 'react';
import useZustandStore from "../../stores/store";
import PostWithCommentsItem from "../../components/postWithComments/PostWithCommentsItem";
import styles from "../Page.module.css"
import IPostWithComments from "../../models/IPostWithComments";

const PostsWithCommentsPage: FC = () => {
    const {postsSlice, commentsSlice} = useZustandStore();

    const [postsWithComments, setPostsWithComments] = useState<IPostWithComments[]>([]);

    useEffect(() => {
        setPostsWithComments(
            postsSlice.posts.map(post => {
                return {
                    ...post,
                    comments: commentsSlice.comments.filter(comment => comment.postId === post.id)
                }
            })
        )
    }, [])

    return (
        <ul className={styles.list}>
            {postsWithComments?.map(item => <PostWithCommentsItem key={item.id}
                                                                 comments={item.comments}
                                                                 userId={item.userId}
                                                                 id={item.id} title={item.title}
                                                                 body={item.body}/>)}
        </ul>
    );
};

export default PostsWithCommentsPage;