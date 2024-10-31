import React, {FC} from 'react';
import useZustandStore from "../../stores/store";
import CommentItem from "../../components/commentItem/CommentItem";
import styles from "../Page.module.css"

const CommentsPage: FC = () => {
    const {commentsSlice} = useZustandStore();

    return (
        <ul className={styles.list}>
            {commentsSlice.comments.map(comment => <CommentItem key={comment.id} postId={comment.postId} id={comment.id}
                                                                name={comment.name} email={comment.email}
                                                                body={comment.body}/>)}
        </ul>
    );
};

export default CommentsPage;