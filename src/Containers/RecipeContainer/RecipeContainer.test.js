/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { RecipeContainer, MSTP } from './RecipeContainer';

describe('RecipeContainer', () => {
  let wrapper;
  let mockIngredientFilter = []
  let mockNameFilter = ''
  let mockTypeFilter = ''
  let mockRecipes = [
    {
      id: 1,
      name: 'Baked Apple',
      type: 'none',
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
    },
    {
      id: 2, 
      name: 'Apple Pie',
      ingredient1: 'Apple',
      type: 'Restore Hearts',
      ingredient2: 'Tabantha Wheat',
      ingredient3: 'Cane Sugar',
      ingredient4: 'Goat Butter',
      ingredient5: null,
      ingredient1_id: 2,
      ingredient2_id: 3,
      ingredient3_id: 4,
      ingredient4_id: 5,
      ingredient5_id: null,
    }
  ]

  beforeEach(() => {
    wrapper = shallow(<RecipeContainer
      ingredientFilter={mockIngredientFilter}
      nameFilter={mockNameFilter}
      typeFilter={mockTypeFilter}
      recipes={mockRecipes}
    />);
  });

  it('should have a default state', () => {
    expect(wrapper.state().loading).toEqual(true)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('filterByIngredient', () => {
    it('should return all recipes if there are no ingredients in the filter', () => {
      expect(
        wrapper
        .instance()
        .filterByIngredient(mockRecipes)
      ).toEqual(mockRecipes)
    })

    it('should return an array of recipes whose ingredients match what is in the filter', () => {
      const wrapper = shallow(<RecipeContainer
        ingredientFilter={[{name: 'Tabantha Wheat', id: '3'}]}
        nameFilter={mockNameFilter}
        typeFilter={mockTypeFilter}
        recipes={mockRecipes}
      />);
      
      expect(
        wrapper
        .instance()
        .filterByIngredient(mockRecipes)
      ).toEqual([{
        id: 2,
        name: 'Apple Pie',
        type: 'Restore Hearts',
        ingredient1: 'Apple',
        ingredient2: 'Tabantha Wheat',
        ingredient3: 'Cane Sugar',
        ingredient4: 'Goat Butter',
        ingredient5: null,
        ingredient1_id: 2,
        ingredient2_id: 3,
        ingredient3_id: 4,
        ingredient4_id: 5,
        ingredient5_id: null,
      }])
    })
  })

  describe('filterByName', () => {
    it('should return all ingredients if there is no name in filter', () => {
      expect(
        wrapper
        .instance()
        .filterByName(mockRecipes)
      ).toEqual(mockRecipes)
    })

    it('should return an array with ingredients matching the name filter', () => {
      const wrapper = shallow(<RecipeContainer
        ingredientFilter={mockIngredientFilter}
        nameFilter={'Pie'}
        typeFilter={mockTypeFilter}
        recipes={mockRecipes}
      />);

      expect(
        wrapper
        .instance()
        .filterByName(mockRecipes)
      ).toEqual([{
        id: 2,
        name: 'Apple Pie',
        type: 'Restore Hearts',
        ingredient1: 'Apple',
        ingredient2: 'Tabantha Wheat',
        ingredient3: 'Cane Sugar',
        ingredient4: 'Goat Butter',
        ingredient5: null,
        ingredient1_id: 2,
        ingredient2_id: 3,
        ingredient3_id: 4,
        ingredient4_id: 5,
        ingredient5_id: null,
      }])
    })

    it('should not be case sensative', () => {
      const wrapper = shallow(<RecipeContainer
        ingredientFilter={mockIngredientFilter}
        nameFilter={'pIE'}
        typeFilter={mockTypeFilter}
        recipes={mockRecipes}
      />);

      expect(
        wrapper
        .instance()
        .filterByName(mockRecipes)
      ).toEqual([{
        id: 2,
        name: 'Apple Pie',
        type: 'Restore Hearts',
        ingredient1: 'Apple',
        ingredient2: 'Tabantha Wheat',
        ingredient3: 'Cane Sugar',
        ingredient4: 'Goat Butter',
        ingredient5: null,
        ingredient1_id: 2,
        ingredient2_id: 3,
        ingredient3_id: 4,
        ingredient4_id: 5,
        ingredient5_id: null,
      }])
    })
  })

  describe('filterByType', () => {
    it('should return all ingredients if there is no filter applied', () => {
      expect(wrapper.instance().filterByType(mockRecipes)).toEqual(mockRecipes);
    })

    it('should return an array of ingredients that match the type filter', () => {
      const wrapper = shallow(<RecipeContainer
        ingredientFilter={mockIngredientFilter}
        nameFilter={mockNameFilter}
        typeFilter={'Restore Hearts'}
        recipes={mockRecipes}
      />);

      expect(wrapper.instance().filterByType(mockRecipes)).toEqual([{
        id: 2,
        name: 'Apple Pie',
        type: 'Restore Hearts',
        ingredient1: 'Apple',
        ingredient2: 'Tabantha Wheat',
        ingredient3: 'Cane Sugar',
        ingredient4: 'Goat Butter',
        ingredient5: null,
        ingredient1_id: 2,
        ingredient2_id: 3,
        ingredient3_id: 4,
        ingredient4_id: 5,
        ingredient5_id: null,
      }])
    })
  })

  describe('filterRecipes', () => {
    it('should call each filtering algorithm with the array of recipes', () => {
      wrapper.instance().filterByIngredient = jest.fn()
        .mockImplementation(() => mockRecipes)
      wrapper.instance().filterByName = jest.fn()
        .mockImplementation(() => mockRecipes)
      wrapper.instance().filterByType = jest.fn()
        .mockImplementation(() => mockRecipes)
      
      wrapper.instance().filterRecipes(mockRecipes)

      expect(wrapper.instance().filterByIngredient).toHaveBeenCalledWith(mockRecipes)
      expect(wrapper.instance().filterByName).toHaveBeenCalledWith(mockRecipes)
      expect(wrapper.instance().filterByType).toHaveBeenCalledWith(mockRecipes)
    })

    it('should return the array of recipes after passing through the filters', () => {
      wrapper.instance().filterByIngredient = jest.fn()
        .mockImplementation(() => mockRecipes)
      wrapper.instance().filterByName = jest.fn()
        .mockImplementation(() => mockRecipes)
      wrapper.instance().filterByType = jest.fn()
        .mockImplementation(() => mockRecipes)

      expect(wrapper.instance().filterRecipes(mockRecipes)).toEqual(mockRecipes);
    })
  })

  describe('renderRecipes', () => {
    it('should match the snapshot if there are no recipes to render', () => {
      const wrapper = shallow(<RecipeContainer
        ingredientFilter={mockIngredientFilter}
        nameFilter={mockNameFilter}
        typeFilter={mockTypeFilter}
        recipes={[]}
      />);

      expect(wrapper.instance().renderRecipes()).toMatchSnapshot();
    })

    it('should match the snapshot when it renders ingredients', () => {
      const wrapper = shallow(<RecipeContainer
        ingredientFilter={mockIngredientFilter}
        nameFilter={mockNameFilter}
        typeFilter={mockTypeFilter}
        recipes={mockRecipes}
      />);

      expect(wrapper.instance().renderRecipes()).toMatchSnapshot()
    })
  })

  describe('MSTP', () => {
    it('should return an object with props from state', () => {
      const mockState = {
        recipes: [],
        ingredientFilter: [],
        nameFilter: '',
        typeFilter: ''
      }

      const mapped = MSTP(mockState);

      expect(mapped.recipes).toEqual([]);
      expect(mapped.ingredientFilter).toEqual([]);
      expect(mapped.nameFilter).toEqual('');
      expect(mapped.typeFilter).toEqual('');
    })
  })
});