import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styles from "./Header.module.css"

const Header: FC = () => {
    return (
        <header className={"container"}>
            <nav>
                <ul className={styles.nav__list}>
                    <li><Link className={styles.link} to={"/"}>Home</Link></li>
                    <li><Link className={styles.link} to={"users"}>Users</Link></li>
                    <li><Link className={styles.link} to={"posts"}>Posts</Link></li>
                    <li><Link className={styles.link} to={"comments"}>Comments</Link></li>
                    <li><Link className={styles.link} to={"wrong"}>Wrong Page</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;