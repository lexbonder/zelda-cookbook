// Recipes =================

export const populateRecipes = recipes => ({
  type: 'POPULATE_RECIPES',
  recipes
});

// Ingredients =============

export const populateIngredients = ingredients => ({
  type: 'POPULATE_INGREDIENTS',
  ingredients
});

// Filter ==================

export const addIngredientFilter = ingredient => ({
  type: 'ADD_INGREDIENT_FILTER',
  ingredient
});

export const removeIngredientFilter = id => ({
  type: 'REMOVE_INGREDIENT_FILTER',
  id
});

export const updateNameFilter = name => ({
  type: 'UPDATE_NAME_FILTER',
  name
});

export const addTypeFilter = recipeType => ({
  type: 'ADD_TYPE_FILTER',
  recipeType
});

export const removeTypeFilter = () => ({
  type: 'REMOVE_TYPE_FILTER'
});