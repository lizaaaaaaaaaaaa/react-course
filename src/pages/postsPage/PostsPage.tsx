import React, {FC} from 'react';
import {useAppSelector} from "../../redux/store";
import PostComponent from "../../components/postsComponent/PostComponent";

const PostsPage: FC = () => {
    const posts = useAppSelector(state => state.postsSlice.posts);

    return (
        <>
            <h1>Posts</h1>
            <ul>{posts.map(post => <PostComponent key={post.id} userId={post.userId} id={post.id} title={post.title}
                                                  body={post.body}/>)}</ul>
        </>
    );
};

export default PostsPage;