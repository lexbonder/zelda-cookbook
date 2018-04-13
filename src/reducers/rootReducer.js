import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import ingredientReducer from './ingredientReducer';
import ingredientFilterReducer from './ingredientFilterReducer';
import nameFilterReducer from './nameFilterReducer';
import typeFilterReducer from './typeFilterReducer';

const rootReducer = combineReducers({
  recipes: recipeReducer,
  ingredients: ingredientReducer,
  ingredientFilter: ingredientFilterReducer,
  nameFilter: nameFilterReducer,
  typeFilter: typeFilterReducer
});

export default rootReducer;