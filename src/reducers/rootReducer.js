import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import ingredientReducer from './ingredientReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  recipes: recipeReducer,
  ingredients: ingredientReducer,
  filter: filterReducer
});

export default rootReducer;