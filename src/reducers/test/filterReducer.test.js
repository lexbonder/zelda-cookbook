/* eslint-disable */
import filterReducer from '../filterReducer';

describe('filterReducer', () => {
  it('should return an object with an ingredients key by default', () => {
    expect(filterReducer(undefined, {})).toEqual({ingredients: []})
  })

  it('should add an ingredient to the ingredients array if the type is ADD_INGREDIENT_FILTER', () => {
    const ingredient = {name: 'Apple', id: 1}
    const mockAction = {
      type: 'ADD_INGREDIENT_FILTER',
      ingredient
    }
    const expected = {ingredients: [{name: 'Apple', id: 1}]}
    expect(filterReducer(undefined, mockAction)).toEqual(expected)
  })

  it('should remove an ingredient from the ingredients array if the type is REMOVE_INGREDIENT_FILTER', () => {
    const mockState = {ingredients: [{name: 'Apple', id: 1}, {name: 'Sugar', id: 2}]}
    const mockAction = {
      type: 'REMOVE_INGREDIENT_FILTER',
      id: 2
    }
    const expected = {ingredients: [{name: 'Apple', id: 1}]}

    expect(filterReducer(mockState, mockAction)).toEqual(expected)
  })
})