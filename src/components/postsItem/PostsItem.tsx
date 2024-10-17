import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

const PostsItem: FC<IPost> = ({title}) => {
    return (
        <li>
            {title}
        </li>
    );
};

export default PostsItem;