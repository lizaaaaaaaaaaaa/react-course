import React, {FC, useEffect, useState} from 'react';
import {IComment} from "../../models/IComment";
import {getData} from "../../services/api_services";
import styles from "./FetchDataPages.module.css"

const CommentsPage: FC = () => {
    const [comments, setComments] = useState<IComment[] | null>(null)

    useEffect(() => {
        getData<IComment>("comments", 25).then(comments => setComments(comments))
    }, []);

    return (
        <ul className={`container ${styles.list}`}>
            {comments?.map(comment => <li key={comment.id}>{comment.name}</li>)}
        </ul>
    );
};

export default CommentsPage;