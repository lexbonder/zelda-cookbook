/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { App, MDTP } from './App';
import * as apiCalls from '../../apiCalls';
import { populateRecipes, populateIngredients } from '../../actions';

jest.mock('../../apiCalls')

describe('App', () => {
  let wrapper;
  let mockPopulateIngredients = jest.fn();
  let mockPopulateRecipes = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App
      populateRecipes = { mockPopulateRecipes }
      populateIngredients = { mockPopulateIngredients }
    />);
    
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
    it('should call getIngredients', () => {
      expect(apiCalls.getIngredients).toHaveBeenCalled();
    });

    it('should call getRecipes', () => {
      expect(apiCalls.getRecipes).toHaveBeenCalled();
    });

    it('should call populateRecipes with a recipes array', () => {
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
      }]

      expect(mockPopulateRecipes).toHaveBeenCalledWith(expected)
    });

    it('should call populateIngredients with an ingredients array', () => {
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
      expect(mockPopulateIngredients).toHaveBeenCalledWith(expected);
    })
  });

  describe('MDTP', () => {
    it('should call dispatch when populateRecipes and populateIngredients are called', () => {
      const mockDispatch = jest.fn();
      const mockIngredients = [{
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
      }];
      const mockRecipes = [{
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
      }];
      const result = MDTP(mockDispatch);

      result.populateRecipes(mockRecipes);
      expect(mockDispatch).toHaveBeenCalledWith(populateRecipes(mockRecipes));
      result.populateIngredients(mockIngredients);
      expect(mockDispatch).toHaveBeenCalledWith(populateIngredients(mockIngredients));
    });
  })
});
