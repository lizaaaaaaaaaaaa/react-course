import React, {FC} from 'react';
import {useAppSelector} from "../../redux/store";
import PostsWithCommentsComponent from "../../components/postsWithCommentsComponent/PostsWithCommentsComponent";

const PostsWithCommentsPage: FC = () => {
    const posts = useAppSelector(state => state.postsSlice.posts);
    const comments = useAppSelector(state => state.commentsSlice.comments);

    const combinePostsWithComments = posts.map(post => {
        return {
            ...post,
            comments: comments.filter(comment => comment.postId === post.id)
        }
    })
    return (
        <>
            <h1>Posts with comments</h1>
            {combinePostsWithComments.map(postWithComments => <PostsWithCommentsComponent key={postWithComments.id}
                                                                                             comments={postWithComments.comments}
                                                                                             userId={postWithComments.userId}
                                                                                             id={postWithComments.id}
                                                                                             title={postWithComments.title}
                                                                                             body={postWithComments.body}/>)}
        </>
    );
};

export default PostsWithCommentsPage;