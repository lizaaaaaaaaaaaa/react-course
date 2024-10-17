import React, {FC, useEffect, useState} from 'react';
import {IComment} from "../../models/IComment";
import {getData} from "../../services/api_services";
import styles from "./FetchDataPages.module.css"
import CommentItem from "../../components/commentsItem/CommentItem";

const CommentsPage: FC = () => {
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        getData<IComment>("comments", 25).then(comments => setComments(comments))
    }, []);

    return (
        <ul className={`container ${styles.list}`}>
            {comments.map(comment => <CommentItem key={comment.id} postId={comment.postId} id={comment.id}
                                                  name={comment.name}
                                                  email={comment.email} body={comment.body}/>)}
        </ul>
    );
};

export default CommentsPage;