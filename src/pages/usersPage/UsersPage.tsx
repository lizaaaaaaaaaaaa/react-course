import React, {FC, useContext} from 'react';
import MainContext from "../../context/MainContextProvider";
import UserItem from "../../components/userItem/UserItem";
import styles from "../Page.module.css"

const UsersPage: FC = () => {
    const {usersSlice} = useContext(MainContext);
    return (
        <ul className={styles.list}>
            {usersSlice.users.map(user => <UserItem key={user.id} id={user.id} name={user.name} username={user.username}
                                                    email={user.email}/>)}
        </ul>
    );
};

export default UsersPage;