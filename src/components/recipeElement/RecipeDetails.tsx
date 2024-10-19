import React, {FC, ReactNode} from 'react';
import IRecipe from "../../models/IRecipe";
import styles from "./RecipeDetails.module.css";

type IPropsType = {
    recipe: IRecipe;
    children?: ReactNode
}

const RecipeDetails: FC<IPropsType> = ({recipe}) => {
    return (
        <ul className={styles.list}>
            <li><i>Ingredients:</i> {recipe.ingredients.map((ingredient, index) => <span key={index}>{ingredient}. </span>)}</li>
            <li><i>Cuisine: {recipe.cuisine}</i></li>
            <li><i>Rating: </i> {recipe.rating}</li>
            <img src={recipe.image} alt={recipe.name} className={styles.image} />
        </ul>
    );
};

export default RecipeDetails;