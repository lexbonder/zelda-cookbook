/* eslint-disable */
export const getIngredients = jest.fn()
  .mockImplementation(() => ([{
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
  }]))

export const getRecipes = jest.fn()
  .mockImplementation(() => ([{
    id: 106,
    category: 'recipe',
    hearts: '¾',
    name: 'Baked Apple',
    notes: 'Open flame.',
    resale: '0',
    type: 'Restore Hearts',
    duration: null,
    strength: null,
    ingredient1: 'Apple',
    ingredient2: null,
    ingredient3: null,
    ingredient4: null,
    ingredient5: null,
    ingredient1_id: 2,
    ingredient2_id: null,
    ingredient3_id: null,
    ingredient4_id: null,
    ingredient5_id: null,
    created_at: '2018-04-09T20:52:52.577Z',
    updated_at: '2018-04-09T20:52:52.577Z'
  }]))