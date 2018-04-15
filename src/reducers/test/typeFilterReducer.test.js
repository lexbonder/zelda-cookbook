/* eslint-disable */
import typeFilterReducer from '../typeFilterReducer';

describe('typeFilterReducer', () => {
  it('should return an empty string by default', () => {
    expect(typeFilterReducer(undefined, {})).toEqual('')
  })

  it('should add the recipeType when the type is ADD_TYPE_FILTER', () => {
    const mockAction = {
      type: 'ADD_TYPE_FILTER',
      recipeType: 'Restore Hearts'
    }
    const expected = 'Restore Hearts'
    expect(typeFilterReducer(undefined, mockAction)).toEqual('Restore Hearts')
  })

  it('should set the state as an empty string when the type is REMOVE_TYPE_FILTER', () => {
    const mockAction = {
      type: 'REMOVE_TYPE_FILTER'
    }
    expect(typeFilterReducer(undefined, mockAction)).toEqual('')
  })
})