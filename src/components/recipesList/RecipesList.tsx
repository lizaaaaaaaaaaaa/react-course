import React, {FC, useEffect, useState} from 'react';
import IRecipe from "../../models/IRecipe";
import RecipesItem from "../recipesItem/RecipesItem";
import styles from "./ResipesList.module.css";

type IPropsType = {
    recipes: IRecipe[]
}

const RecipesList: FC<IPropsType> = ({recipes}) => {

    return (
        <ul className={styles.list}>
            {recipes.map(recipe => <RecipesItem key={recipe.id} id={recipe.id} name={recipe.name}
                                                ingredients={recipe.ingredients} instructions={recipe.instructions}
                                                prepTimeMinutes={recipe.prepTimeMinutes}
                                                cookTimeMinutes={recipe.cookTimeMinutes} servings={recipe.servings}
                                                difficulty={recipe.difficulty} cuisine={recipe.cuisine}
                                                caloriesPerServing={recipe.caloriesPerServing} tags={recipe.tags}
                                                userId={recipe.userId} image={recipe.image} rating={recipe.rating}
                                                reviewCount={recipe.reviewCount} mealType={recipe.mealType}/>)}
        </ul>
    );
};

export default RecipesList;