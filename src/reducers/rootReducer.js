import { combineReducers } from 'redux';
import { recipeReducer } from './recipeReducer';
import { ingredientReducer } from './ingredientReducer';
import { filterReducer } from './filterReducer';

export const rootReducer = combineReducers({
  recipes: recipeReducer,
  ingredients: ingredientReducer,
  filter: filterReducer
});