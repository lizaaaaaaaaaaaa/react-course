import React, {FC} from 'react';
import IComment from "../../models/IComment";
import styles from "./CommentItem.module.css"

const CommentItem: FC<IComment> = ({id, body, postId, name, email}) => {
    return (
        <li className={styles.comment}>
            <h2>{name}</h2>
            <div><i>{email}</i></div>
            <p>{body}</p>
        </li>
    );
};

export default CommentItem;