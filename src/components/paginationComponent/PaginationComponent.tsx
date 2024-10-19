import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";
import styles from "./PaginationComponent.module.css";

type IPropsType = {
    prevBtnDisable: boolean,
    nextBtnDisable: boolean
}
const PaginationComponent: FC<IPropsType> = ({prevBtnDisable, nextBtnDisable}) => {
    const [query, setQuery] = useSearchParams({page: "1"})

    const prevRecipesPage = () => {
        let currentPage: number = +((query.get("page")) || "1");
        setQuery({page: (--currentPage).toString()});
    }
    const nextRecipesPage = () => {
        let currentPage: number = +((query.get("page")) || "1");
        setQuery({page: (++currentPage).toString()});
    }
    return (
        <div className={styles.btns}>
            <button onClick={prevRecipesPage} disabled={prevBtnDisable}>&#10096;</button>
            <button onClick={nextRecipesPage} disabled={nextBtnDisable}>&#10097;</button>
        </div>
    );
};

export default PaginationComponent;