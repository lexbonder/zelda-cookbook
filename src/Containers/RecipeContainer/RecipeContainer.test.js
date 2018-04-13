/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { RecipeContainer } from './RecipeContainer';

describe('RecipeContainer', () => {
  let wrapper;
  let mockIngredientFilter = []
  let mockNameFilter = ''
  let mockRecipes = [
    {
      id: 1,
      name: 'Baked Apple',
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
      recipes={mockRecipes}
    />);
  });

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
        recipes={mockRecipes}
      />);
      
      expect(
        wrapper
        .instance()
        .filterByIngredient(mockRecipes)
      ).toEqual([{
        id: 2,
        name: 'Apple Pie',
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
        recipes={mockRecipes}
      />);

      expect(
        wrapper
        .instance()
        .filterByName(mockRecipes)
      ).toEqual([{
        id: 2,
        name: 'Apple Pie',
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
        recipes={mockRecipes}
      />);

      expect(
        wrapper
        .instance()
        .filterByName(mockRecipes)
      ).toEqual([{
        id: 2,
        name: 'Apple Pie',
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
  })
});