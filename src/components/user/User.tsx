import React, {FC, ReactNode} from 'react';
import "./User.css";

type IUserProps = {
    id: number,
    firstName: string,
    lastName: string,
    usersButtonClick: (id: number) => void,
    children?: ReactNode
}

const User: FC<IUserProps> = ({id, firstName, lastName, usersButtonClick}) => {

    return (
        <li>
            {id} - <i>{firstName} {lastName}</i>
            <button className="btn" onClick={() => usersButtonClick(id)}>Show more!</button>
        </li>
    );
};

export default User;