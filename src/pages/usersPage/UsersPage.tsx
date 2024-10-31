import React, {FC} from 'react';
import UserItem from "../../components/userItem/UserItem";
import styles from "../Page.module.css"
import useZustandStore from "../../stores/store";

const UsersPage: FC = () => {
    const {usersSlice} = useZustandStore();
    return (
        <ul className={styles.list}>
            {usersSlice.users.map(user => <UserItem key={user.id} id={user.id} name={user.name} username={user.username}
                                                    email={user.email}/>)}
        </ul>
    );
};

export default UsersPage;