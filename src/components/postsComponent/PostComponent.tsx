import React, {FC} from 'react';
import IPost from "../../models/IPost";

const PostComponent: FC<IPost> = ({title}) => {
    return (
        <li>
            <i>title:</i> {title}
        </li>
    );
};

export default PostComponent;