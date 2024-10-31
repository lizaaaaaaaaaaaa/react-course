import React, {FC} from 'react';
import IPost from "../../models/IPost";
import styles from "./PostItem.module.css"

const PostItem: FC<IPost> = ({id, userId, title, body}) => {
    return (
        <li className={styles.post}>
            <h2>{title}</h2>
            <p>{body}</p>
        </li>
    );
};

export default PostItem;