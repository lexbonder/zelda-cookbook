/* eslint-disable */
import { getIngredientNames } from '../dataCleaner';

describe('getIngredientNames', () => {
  it('should return an array of names and ids after receiving raw data', () => {
    const rawData = [{
      id: 1,
      category: 'food',
      duration: '0:30',
      effect: null,
      hearts: '0.5',
      name: 'Apple',
      resale: '3',
      type: 'Fruit',
      created_at: '2018-04-07T02:42:46.591Z',
      updated_at: '2018-04-07T02:42:46.591Z'
    }]
    const expected = [{
      name: 'Apple',
      id: 1
    }]

    expect(getIngredientNames(rawData)).toEqual(expected)
  })
})