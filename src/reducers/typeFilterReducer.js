const typeFilterReducer = (state = '', action) => {
  switch (action.type) {
  case 'ADD_TYPE_FILTER':
    return action.recipeType;
  case 'REMOVE_TYPE_FILTER':
    return '';
  default:
    return state;
  }
};

export default typeFilterReducer;