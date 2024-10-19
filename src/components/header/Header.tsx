import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styles from "./Header.module.css"

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li><Link to={"/"} className={styles.link}>Home</Link></li>
                    <li><Link to={"/recipes"} className={styles.link}>Recipes</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;