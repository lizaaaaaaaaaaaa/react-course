import React, {FC, ReactNode} from 'react';
import IRecipe from "../../models/IRecipe";
import {Link} from "react-router-dom";
import styles from "./RecipesItem.module.css";

const RecipesItem: FC<IRecipe & { children?: ReactNode }> = (props) => {
    return (
        <li className={styles.item}>
            <Link to={`${props.id}`} state={props} className={styles.link}>{props.name}</Link>
        </li>
    );
};

export default RecipesItem;