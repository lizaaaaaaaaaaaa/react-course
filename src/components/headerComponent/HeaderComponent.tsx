import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styles from "./HeaderComponent.module.css"

const HeaderComponent: FC = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.nav__list}>
                    <li>
                        <Link to={"home"} className={styles.nav__link}>home</Link></li>
                    <li>
                        <Link to={"users"} className={styles.nav__link}>users</Link></li>
                    <li>
                        <Link to={"posts"} className={styles.nav__link}>posts</Link></li>
                    <li>
                        <Link to={"comments"} className={styles.nav__link}>comments</Link></li>
                    <li>
                        <Link to={"posts&comments"} className={styles.nav__link}>posts with comments</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderComponent;