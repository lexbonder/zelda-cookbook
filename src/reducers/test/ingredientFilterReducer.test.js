/* eslint-disable */
import ingredientFilterReducer from '../ingredientFilterReducer';

describe('ingredientFilterReducer', () => {
  it('should return an empty array by default', () => {
    expect(ingredientFilterReducer(undefined, {})).toEqual([])
  })

  it('should add an ingredient to the array if the type is ADD_INGREDIENT_FILTER', () => {
    const ingredient = {name: 'Apple', id: 1}
    const mockAction = {
      type: 'ADD_INGREDIENT_FILTER',
      ingredient
    }
    const expected = [{name: 'Apple', id: 1}]
    expect(ingredientFilterReducer(undefined, mockAction)).toEqual(expected)
  })

  it('should remove an ingredient from the ingredients array if the type is REMOVE_INGREDIENT_FILTER', () => {
    const mockState = [{name: 'Apple', id: 1}, {name: 'Sugar', id: 2}]
    const mockAction = {
      type: 'REMOVE_INGREDIENT_FILTER',
      id: 2
    }
    const expected = [{name: 'Apple', id: 1}]

    expect(ingredientFilterReducer(mockState, mockAction)).toEqual(expected)
  })
})