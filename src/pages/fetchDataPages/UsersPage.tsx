import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {getData} from "../../services/api_services";
import styles from "./FetchDataPages.module.css"
import UserItem from "../../components/userItem/UserItem";

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getData<IUser>("users", 10).then(users => setUsers(users))
    }, []);

    return (
        <ul className={`container ${styles.list}`}>
            {users.map(user => <UserItem key={user.id} id={user.id} name={user.name} username={user.username} email={user.email}
                                         address={user.address} phone={user.phone} website={user.website}
                                         company={user.company}/>)}
        </ul>
    );
};

export default UsersPage;