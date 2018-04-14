const typeFilterReducer = (state = '', action) => {
  switch (action.type) {
  case 'ADD_TYPE_FILTER':
    return action.recipeType;
  default:
    return state;
  }
};

export default typeFilterReducer;