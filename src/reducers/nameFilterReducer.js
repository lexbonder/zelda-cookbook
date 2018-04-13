const nameFilterReducer = (state = '', action) => {
  switch (action.type) {
  case 'UPDATE_NAME_FILTER':
    return action.name;
  default:
    return state;
  }
};

export default nameFilterReducer;