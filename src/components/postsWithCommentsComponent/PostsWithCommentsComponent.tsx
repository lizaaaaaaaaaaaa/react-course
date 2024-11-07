import React, {FC} from 'react';
import IPostWithComments from "../../models/IPostWithComments";
import CommentComponent from "../commentComponent/CommentComponent";

const PostsWithCommentsComponent: FC<IPostWithComments> = ({title, comments}) => {
    return (
        <li>
            <i>title:</i> {title}
            <div>
                <i>comments:</i>
                <ul>{comments.map(comment => <CommentComponent key={comment.id} postId={comment.postId}
                                                               id={comment.postId} name={comment.name}
                                                               email={comment.email} body={comment.body}/>)}</ul>
            </div>
        </li>
    );
};

export default PostsWithCommentsComponent;