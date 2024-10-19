import React, {FC, useEffect, useState} from 'react';
import PaginationComponent from "../components/paginationComponent/PaginationComponent";
import RecipesList from "../components/recipesList/RecipesList";
import {useSearchParams} from "react-router-dom";
import IRecipe from "../models/IRecipe";
import {getAllRecipes} from "../services/recipes.api.service";

const RecipesPage: FC = () => {
    const [query] = useSearchParams({page: "1"})
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [isPrevBtnDisable, setIsPrevBtnDisable] = useState<boolean>(true);
    const [isNextBtnDisable, setIsNextBtnDisable] = useState<boolean>(true);

    useEffect(() => {
        const currentPage: number = +(query.get("page") || "1");
        getAllRecipes(currentPage).then(data => {
            setRecipes(data.recipes);
            setIsPrevBtnDisable(data.prevBtnDisabled);
            setIsNextBtnDisable((data.nextBtnDisabled));
        });
    }, [query]);

    return (
        <div>
            <RecipesList recipes={recipes}/>
            <PaginationComponent prevBtnDisable={isPrevBtnDisable} nextBtnDisable={isNextBtnDisable}/>
        </div>
    );
};

export default RecipesPage;