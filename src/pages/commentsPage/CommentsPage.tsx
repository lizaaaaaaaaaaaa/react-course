import React, {FC, useContext} from 'react';
import MainContext from "../../context/MainContextProvider";
import CommentItem from "../../components/commentItem/CommentItem";
import styles from "../Page.module.css"

const CommentsPage: FC = () => {
    const {commentsSlice} = useContext(MainContext)

    return (
        <ul className={styles.list}>
            {commentsSlice.comments.map(comment => <CommentItem key={comment.id} postId={comment.postId} id={comment.id}
                                                                name={comment.name} email={comment.email}
                                                                body={comment.body}/>)}
        </ul>
    );
};

export default CommentsPage;