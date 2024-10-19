import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import styles from "./MainPageContent.module.css";

const MainPageContent: FC = () => {
    const navigate = useNavigate();

    const recipesBtnClick = () => {
        return navigate("/recipes");
    }

    return (
        <>
            <div className={styles.title}>Welcome!</div>
            <button className={styles.btn} onClick={recipesBtnClick}>Find recipe!</button>
        </>
    );
};

export default MainPageContent;