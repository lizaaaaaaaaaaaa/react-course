export default interface IRecipesUrl {
    recipesUrl: (limit: string, skip: string) => string,
    singleRecipeUrl: (id: string) => string,
}