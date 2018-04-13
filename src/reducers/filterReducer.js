const filterReducer = (state = {ingredients: []}, action) => {
  switch (action.type) {
  case 'ADD_INGREDIENT_FILTER':
    return {...state, ingredients: [...state.ingredients, action.ingredient]};
  case 'REMOVE_INGREDIENT_FILTER':
    return {...state,
      ingredients: state.ingredients.filter(ingredient => action.id !== ingredient.id)
    };
  default:
    return state;
  }
};

export default filterReducer;