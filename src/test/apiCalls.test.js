/* eslint-disable */
import { getIngredients } from '../apiCalls';

describe('getIngredients', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
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
        })
      })
    )
  })

  it('should be called with the right params', () => {
    const expected = 'http://localhost:3000/api/v1/ingredients'
    getIngredients()
    expect(window.fetch).toHaveBeenCalledWith(expected)
  })

  it('should return an object if the status is ok', () => {
    const mockRawIngredients = {
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
    }

    expect(getIngredients()).resolves.toEqual(mockRawIngredients)
  })

  it('throws an error if the status code is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 500
      })
    )
    expect(getIngredients()).rejects.toEqual(Error('Failed to get ingredients from database'))
  })


})