import React, {FC} from 'react';
import {useAppSelector} from "../../redux/store";
import CommentComponent from "../../components/commentComponent/CommentComponent";

const CommentsPage: FC = () => {
    const comments = useAppSelector(state => state.commentsSlice.comments);

    return (
        <>
            <h1>Comments</h1>
            <ul>{comments.map(comment => <CommentComponent key={comment.id} postId={comment.postId} id={comment.postId}
                                                           name={comment.name} email={comment.email}
                                                           body={comment.body}/>)}</ul>
        </>
    );
};

export default CommentsPage;