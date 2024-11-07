import React, {FC, useEffect} from 'react';
import {useAppSelector} from "../../redux/store";
import UserComponent from "../../components/userComponent/UserComponent";

const UsersPage: FC = () => {
    const users = useAppSelector(state => state.usersSlice.users);
    useEffect(() => {
        console.log(users);
    }, [users]);

    return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map(user => <UserComponent key={user.id} id={user.id} name={user.name} email={user.email}
                                                  username={user.username}/>)}
            </ul>
        </>
    );
};

export default UsersPage;