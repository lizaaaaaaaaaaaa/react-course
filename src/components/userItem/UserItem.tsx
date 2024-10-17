import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

const UserItem: FC<IUser> = ({name}) => {
    return (
        <li>
            {name}
        </li>
    );
};

export default UserItem;