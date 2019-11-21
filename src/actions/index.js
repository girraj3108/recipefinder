export const SET_RECIPES = 'SET_RECIPES'
export const FAVROURITE_RECIPE = 'FAVOURITE_RECIPE'

export function setRecipes(items) {
    return {
        type: SET_RECIPES,
        items
    }
}

export function favouriteRecipe(recipe) {
    return {
        type: FAVROURITE_RECIPE,
        recipe
    }
}