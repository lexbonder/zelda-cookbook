/* eslint-disable */
import nameFilterReducer from '../nameFilterReducer';

describe('nameFilterReducer', () => {
  it('should return an empty string by default', () => {
    expect(nameFilterReducer(undefined, {})).toEqual('')
  })

  it('should update the name when the time is UPDATE_NAME_FILTER', () => {
    const mockAction = {
      type: 'UPDATE_NAME_FILTER',
      name: 'Pie'
    }

    const expected = 'Pie'

    expect(nameFilterReducer(undefined, mockAction)).toEqual('Pie')
  })
})