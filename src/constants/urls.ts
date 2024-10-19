import IRecipesUrl from "../models/IRecipesUrl";

const baseUrl: string = "https://dummyjson.com";

const recipesUrls: IRecipesUrl = {
    recipesUrl: (limit, skip) => `/recipes?limit=${limit}&skip=${skip}`,

    singleRecipeUrl: (id) => "/recipes/" + id,
}

export {
    baseUrl,
    recipesUrls
}