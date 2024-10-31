import React, {FC} from 'react';
import IPostWithComments from "../../models/IPostWithComments";
import CommentItem from "../commentItem/CommentItem";
import styles from "./PostWithCommentsItem.module.css"

const PostWithCommentsItem: FC<IPostWithComments> = ({id, comments, userId, title, body}) => {
    return (
        <li className={styles.item}>
            <h2>{title}</h2>
            <p>{body}</p>
            <div className={styles.item__comments}>
                {comments.map(comment => <CommentItem postId={comment.postId} id={comment.id} name={comment.name}
                                                      email={comment.email} body={comment.body}/>)}
            </div>
        </li>
    );
};

export default PostWithCommentsItem;