/* eslint-disable */
import typeFilterReducer from '../typeFilterReducer';

describe('typeFilterReducer', () => {
  it('should return an empty string by default', () => {
    expect(typeFilterReducer(undefined, {})).toEqual('')
  })

  it('should add the recipeType when the time is ADD_TYPE_FILTER', () => {
    const mockAction = {
      type: 'ADD_TYPE_FILTER',
      recipeType: 'attack'
    }

    const expected = 'attack'

    expect(typeFilterReducer(undefined, mockAction)).toEqual('attack')
  })
})