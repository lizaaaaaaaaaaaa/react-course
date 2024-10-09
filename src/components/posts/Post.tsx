import React, {FC, ReactNode} from 'react';
import IUserPost from "../../models/IUserPost";
import "./Post.css"

const Post: FC<IUserPost & { children?: ReactNode }> = ({title, body, tags}) => {
    return (
        <li className="post">
            <h3>{title}</h3>
            <p>{body}</p>
            <div>{tags?.map((tag: string, index) => <a href="https://example.com" key={index + 1}>#{tag} </a>)}</div>
        </li>
    );
};

export default Post;