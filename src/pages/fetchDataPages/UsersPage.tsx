import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {getData} from "../../services/api_services";
import styles from "./FetchDataPages.module.css"

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[] | null>(null)

    useEffect(() => {
        getData<IUser>("users", 10).then(users => setUsers(users))
    }, []);

    return (
        <ul className={`container ${styles.list}`}>
            {users?.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    );
};

export default UsersPage;