import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styles from "./MainPage.module.css"

const MainPage: FC = () => {
    return (
        <div>
            <h2 className={"title"}>Welcome!</h2>
            <Link className={`btn ${styles["link-main"]}`} to={"users"}>Go to users page!</Link>
        </div>
    );
};

export default MainPage;