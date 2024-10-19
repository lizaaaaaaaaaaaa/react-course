import axios from "axios";
import {baseUrl, recipesUrls} from "../constants/urls";
import IRecipe from "../models/IRecipe";

interface IYummyResponse {
    total: number,
    skip: number,
    limit: number,
    recipes: IRecipe[]
}

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {"Content-Type": "application/json"}
});

const getAllRecipes = async (currentPage: number): Promise<{
    recipes: IRecipe[],
    prevBtnDisabled: boolean,
    nextBtnDisabled: boolean
}> => {
    const limit: number = 5;
    const skip: number = (currentPage - 1) * limit;

    const response = await axiosInstance.get<IYummyResponse>(recipesUrls.recipesUrl(limit.toString(), skip.toString()));

    const prevBtnDisabled = skip === 0;
    const nextBtnDisabled = response.data.total - limit === skip;

    return {
        recipes: response.data.recipes,
        prevBtnDisabled,
        nextBtnDisabled
    };
}

const getSingleRecipeById = async (id: string): Promise<IRecipe> => {
    return (await axiosInstance.get<IRecipe>(recipesUrls.singleRecipeUrl(id))).data;
}

export {
    getAllRecipes,
    getSingleRecipeById
}