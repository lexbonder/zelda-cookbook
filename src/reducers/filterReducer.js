export const filterReducer = (state = {ingredients: []}, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT_FILTER':
      return {...state, ingredients: [...state.ingredients, action.ingredient]};
    case 'REMOVE_INGREDIENT_FILTER':
      const filtered = state.ingredients.filter(ingredient => action.id !== ingredient.id)
      return {...state, ingredients: filtered}
    default:
      return state;
  }
}