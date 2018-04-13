const ingredientReducer = (state = [], action) => {
  switch (action.type) {
  case 'POPULATE_INGREDIENTS':
    return action.ingredients;
  default:
    return state;
  }
};

export default ingredientReducer;