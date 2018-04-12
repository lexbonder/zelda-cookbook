/* eslint-disable */
import ingredientReducer from '../ingredientReducer';

describe('ingredientReducer', () => {
  it('should return an empty array by default', () => {
    expect(ingredientReducer(undefined, {})).toEqual([])
  })

  it('should return an array of ingredients if the type is POPULATE_INGREDIENTS', () => {
    const mockAction = {
      type: 'POPULATE_INGREDIENTS',
      ingredients: [
        {name: 'Apple'},
        {name: 'Wheat'}
      ]
    }
    const expected = [
      {name: 'Apple'},
      {name: 'Wheat'}
    ]
    expect(ingredientReducer(undefined, mockAction)).toEqual(expected)
  })
})