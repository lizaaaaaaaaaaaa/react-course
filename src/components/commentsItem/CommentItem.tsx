import React, {FC} from 'react';
import {IComment} from "../../models/IComment";

const CommentItem: FC<IComment> = ({name}) => {
    return (
        <li>
            {name}
        </li>
    );
};

export default CommentItem;