import React, {FC} from 'react';
import IUser from "../../models/IUser";

const UserItem: FC<IUser> = ({id, name, username, email}) => {
    return (
        <li>
            <div><i>{name}</i></div>
            <i>username</i>: {username}, <i>email:</i> {email}
        </li>
    );
};

export default UserItem;