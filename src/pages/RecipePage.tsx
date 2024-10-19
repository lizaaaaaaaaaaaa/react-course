import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import useAppLocation from "../components/hooks/useAppLocation";
import IRecipe from "../models/IRecipe";
import RecipeDetails from "../components/recipeElement/RecipeDetails";
import {getSingleRecipeById} from "../services/recipes.api.service";

const RecipePage: FC = () => {
    const {id} = useParams()
    const {state} = useAppLocation<IRecipe>()
    const [recipe, setRecipe] = useState<IRecipe | null>(null)

    useEffect((): void => {
        if (state) {
            setRecipe(state)
        } else if (id) {
            getSingleRecipeById(id).then(recipe => setRecipe(recipe))
        }
    }, []);

    return (
        <>
            <h1>{recipe?.name}</h1>
            {recipe && <RecipeDetails recipe={recipe}/>}
        </>
    );
};

export default RecipePage;