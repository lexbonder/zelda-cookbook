import * as actions from '../actions';
const {
  populateRecipes,
  populateIngredients,
  addIngredientFilter,
  removeIngredientFilter
} = actions;

describe('populateRecipes', () => {
  it('should return an object with a type of POPULATE_RECIPES and a recipes array', () => {
    const recipes = [{
      name: 'Baked Apple'
    }]
    const expected = {
      type: 'POPULATE_RECIPES',
      recipes
    }

    expect(populateRecipes(recipes)).toEqual(expected);
  })
})

describe('populateIngredients', () => {
  it('should return an object with a type of POPULATE_INGREDIENTS and an ingredients array', () => {
    const ingredients = [{
      name: 'Apple'
    }]
    const expected = {
      type: 'POPULATE_INGREDIENTS',
      ingredients
    }
    expect(populateIngredients(ingredients)).toEqual(expected);
  })
})

describe('addIngredientFilter', () => {
  it('should return an object with a type of ADD_INGREDIENT_FILTER and an ingredient object', () => {
    const ingredient = {
      id: 1,
      name: 'Apple'
    }
    const expected = {
      type: 'ADD_INGREDIENT_FILTER',
      ingredient
    }

    expect(addIngredientFilter(ingredient)).toEqual(expected);
  })
})

describe('removeIngredientFilter', () => {
  it('should return an object with a type of REMOVE_INGREDIENT_FILTER and an id', () => {
    const id = 1
    const expected = {
      type: 'REMOVE_INGREDIENT_FILTER',
      id
    }

    expect(removeIngredientFilter(id)).toEqual(expected);
  })
})