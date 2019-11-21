import { SET_RECIPES, FAVROURITE_RECIPE } from '../actions'
import { combineReducers } from 'redux'

function recipes(state = [], action) {
    switch (action.type) {
        case SET_RECIPES:
            return action.items;
        default:
            return state
    }
}

function favouriteRecipies(state = [], action) {
    switch (action.type) {
        case FAVROURITE_RECIPE:
            state = [...state, action.recipe]
            return state
        default:
            return state;
    }
}

const rootReducer = combineReducers({ recipes, favouriteRecipies })

export default rootReducer