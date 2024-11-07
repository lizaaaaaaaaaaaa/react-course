import React, {FC} from 'react';
import IUser from "../../models/IUser";

const UserComponent:FC<IUser> = ({email}) => {
    return (
        <li>
            <i>email: </i>{email};
        </li>
    );
};

export default UserComponent;