/* eslint-disable */
import { getIngredients, getRecipes } from '../apiCalls';

describe('getIngredients', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve([{
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
        }])
      })
    )
  })

  it('should be called with the right params', () => {
    // const expected = 'http://localhost:3000/api/v1/ingredients'
    const expected = 'https://zelda-cookbook-backend.herokuapp.com/api/v1/ingredients'
    getIngredients()
    expect(window.fetch).toHaveBeenCalledWith(expected)
  })

  it('should return an object if the status is ok', () => {
    const expected = [{
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

    expect(getIngredients()).resolves.toEqual(expected)
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

describe('getRecipes', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve([{
          id: 106,
          category: 'recipe',
          hearts: '¾',
          name: 'Baked Apple',
          notes: 'Open flame.',
          resale: '0',
          type: 'Restore Hearts',
          duration: null,
          strength: null,
          ingredient1: 2,
          ingredient2: null,
          ingredient3: null,
          ingredient4: null,
          ingredient5: null,
          created_at: '2018-04-09T20:52:52.577Z',
          updated_at: '2018-04-09T20:52:52.577Z'
        }])
      }))
  })

  it('should be called with the right params', () => {
    // const expected = 'http://localhost:3000/api/v1/recipes'
    const expected = 'https://zelda-cookbook-backend.herokuapp.com/api/v1/recipes'
    getRecipes()
    expect(window.fetch).toHaveBeenCalledWith(expected)
  })

  it('should return an object if the status is ok', () => {
    const expected = [{
      id: 106,
      category: 'recipe',
      hearts: '¾',
      name: 'Baked Apple',
      notes: 'Open flame.',
      resale: '0',
      type: 'Restore Hearts',
      duration: null,
      strength: null,
      ingredient1: 2,
      ingredient2: null,
      ingredient3: null,
      ingredient4: null,
      ingredient5: null,
      created_at: '2018-04-09T20:52:52.577Z',
      updated_at: '2018-04-09T20:52:52.577Z'
    }]

    expect(getRecipes()).resolves.toEqual(expected)
  })

  it('throws an error if the status code is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 500
      })
    )
    expect(getRecipes()).rejects.toEqual(Error('Failed to get recipes from database'))
  })
})