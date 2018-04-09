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