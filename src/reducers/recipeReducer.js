const recipeReducer = (state = [], action) => {
  switch (action.type) {
  case 'POPULATE_RECIPES':
    return action.recipes;
  default:
    return state;
  }
};

export default recipeReducer;