import React, {FC} from 'react';
import IComment from "../../models/IComment";

const CommentComponent: FC<IComment> = ({name}) => {
    return (
        <li>
            <i>name:</i> {name}
        </li>
    );
};

export default CommentComponent;