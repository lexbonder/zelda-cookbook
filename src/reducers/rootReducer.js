import { combineReducers } from 'redux';
import { recipeReducer } from './recipeReducer';
import { ingredientReducer } from './ingredientReducer';

export const rootReducer = combineReducers({
  recipes: recipeReducer,
  ingredients: ingredientReducer
});