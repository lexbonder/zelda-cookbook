const ingredientFilterReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_INGREDIENT_FILTER':
    return [...state, action.ingredient];
  case 'REMOVE_INGREDIENT_FILTER':
    return state.filter(ingredient => action.id !== ingredient.id);
  default:
    return state;
  }
};

export default ingredientFilterReducer;