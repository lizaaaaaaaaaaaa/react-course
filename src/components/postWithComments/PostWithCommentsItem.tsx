import React, {FC} from 'react';
import IPostWithComments from "../../models/IPostWithComments";
import CommentItem from "../commentItem/CommentItem";
import styles from "./PostWithCommentsItem.module.css"

const PostWithCommentsItem: FC<IPostWithComments> = ({id, comments, userId, title, body}) => {
    return (
        <li className={styles.item}>
            <h2>{title}</h2>
            <p>{body}</p>
            <ul className={styles.item__comments}>
                {comments.map(comment => <CommentItem key={comment.id}  postId={comment.postId} id={comment.id} name={comment.name}
                                                      email={comment.email} body={comment.body}/>)}
            </ul>
        </li>
    );
};

export default PostWithCommentsItem;