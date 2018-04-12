/* eslint-disable */
import recipeReducer from '../recipeReducer';

describe('recipeReducer', () => {
  it('should return an empty array by default', () => {
    expect(recipeReducer(undefined, {})).toEqual([])
  })

  it('should return an array of recipes if the type is POPULATE_RECIPES', () => {
    const mockAction = {
      type: 'POPULATE_RECIPES',
      recipes: [
        {name: 'Baked Apple'},
        {name: 'Apple Pie'}
      ]
    }
    const expected = [
      {name: 'Baked Apple'},
      {name: 'Apple Pie'}
    ]
    expect(recipeReducer(undefined, mockAction)).toEqual(expected)
  })
})
