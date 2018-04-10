/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';
import * as apiCalls from '../apiCalls';
import * as dataCleaner from '../dataCleaner';

jest.mock('../apiCalls')
jest.mock('../dataCleaner')
jest.useFakeTimers();

describe('SearchBar', () => {
  let wrapper; 
  
  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
  });

  it('should have a default state', () => {
    const expected = {
      ingredients: [],
      recipes: [],
      ingredientSearch: '',
      recipeSearch: '',
      ingredientButton: false,
      recipeButton: true,
      ingredientBar: false,
      recipeBar: true,
      ingredientTags: [],
      searchFocus: false,
    };

    expect(shallow(<SearchBar />).state()).toEqual(expected);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
    it('should call getIngredients', () => {
      expect(apiCalls.getIngredients).toHaveBeenCalled();
    });

    it('should call getIngredientNames with an array of raw ingredients', () => {
      const mockRawIngredients = [{
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
      expect(dataCleaner.getIngredientNames).toHaveBeenCalledWith(mockRawIngredients)
    });

    it('should setState of ingredients to be an array of cleaned ingredients', () => {
      const mockIngredients = [{
        name: 'Apple',
        id: 1
      }]
      expect(wrapper.state().ingredients).toEqual(mockIngredients)
    });
  });

  describe('handleChange', () => {
    it('should set state based on the input that is changed', () => {
      const event = { target: { 
        name: 'recipeSearch',
        value: 'asdf'
      }};
      const event2 = { target: { 
        name: 'ingredientSearch',
        value: 'qwerty'
      }};

      wrapper.instance().handleChange(event);
      expect(wrapper.state().recipeSearch).toEqual('asdf');
      wrapper.instance().handleChange(event2);
      expect(wrapper.state().ingredientSearch).toEqual('qwerty');
    });
  });

  describe('handleClick', () => {
    it('should call toggleSearchBar and toggleSearchButton with the target id', () => {
      const event = { target: {
        id: 'ingredient' 
      }};

      wrapper.instance().toggleSearchBar = jest.fn();
      wrapper.instance().toggleSearchButton = jest.fn();


      wrapper.instance().handleClick(event);
      expect(wrapper.instance().toggleSearchBar).toHaveBeenCalledWith('ingredient');
      expect(wrapper.instance().toggleSearchButton).toHaveBeenCalledWith('ingredient');
    });
  });

  describe('toggleSearchBar', () => {
    it('should match the snapshot when it is called', () => {
      expect(wrapper.instance().toggleSearchBar('ingredient')).toMatchSnapshot();
      expect(wrapper.instance().toggleSearchBar('recipe')).toMatchSnapshot();
    });
  });

  describe('toggleSearchButton', () => {
    it('should match the snapshot when it is called', () => {
      expect(wrapper.instance().toggleSearchBar('ingredient')).toMatchSnapshot();
      expect(wrapper.instance().toggleSearchBar('recipe')).toMatchSnapshot();    });
  });

  describe('ingredientListToRender', () => {
    it('should render a list of ingredients and match the snapshot', () => {
      expect(wrapper.instance().ingredientListToRender()).toMatchSnapshot()
    });

    it('should filter its results based on what the user is searching for', () => {
      wrapper.state().ingredientSearch = 'asdf'
      expect(wrapper.instance().ingredientListToRender()).toMatchSnapshot()
    });
  });

  describe('selectIngredient', () => {
    it('should add a selected ingredient to this.state.ingredientTags', () => {
      const mockEvent = { target: {id: 1, innerText: 'Apple'}}
      const expected = [{id: 1, name: 'Apple'}]
      wrapper.instance().selectIngredient(mockEvent)
      expect(wrapper.state().ingredientTags).toEqual(expected)
    });

    it('should not add duplicate ingredients', () => {
      wrapper.state().ingredientTags = [{id: 1, name: 'Apple'}]
      const mockEvent = { target: {id: 1, innerText: 'Apple'}}
      const expected = [{id: 1, name: 'Apple'}]
      wrapper.instance().selectIngredient(mockEvent)
      expect(wrapper.state().ingredientTags).toEqual(expected)
    });

    it('should not add more than 5 ingredients', () => {
      wrapper.state().ingredientTags = [
        {id: 0, name: 'Chicken'},
        {id: 2, name: 'Grape'},
        {id: 3, name: 'Pear'},
        {id: 4, name: 'Fish'},
        {id: 5, name: 'Tuna'}
      ]
      const expected = [
        {id: 0, name: 'Chicken'},
        {id: 2, name: 'Grape'},
        {id: 3, name: 'Pear'},
        {id: 4, name: 'Fish'},
        {id: 5, name: 'Tuna'}
      ]
      const mockEvent = { 
        target: {
          id: 1, innerText: 'Apple'
        }
      }
      wrapper.instance().selectIngredient(mockEvent)
      expect(wrapper.state().ingredientTags).toEqual(expected)
    });
  });

  describe('handleFocus', () => {
    it('should set searchFocus to true', () => {
      wrapper.instance().handleFocus()
      expect(wrapper.state().searchFocus).toEqual(true)
    });
  });

  describe('handleBlur', () => {
    it('should set searchFocus to false', () => {
      wrapper.state().searchFocus = true
      wrapper.instance().handleBlur()
      jest.runAllTimers()
      expect(wrapper.state().searchFocus).toEqual(false)
    });
  });

  describe('tagsToRender', () => {
    it('should return tags depending on what is in this.state.ingredientTags', () => {
      wrapper.state().ingredientTags = [{id: 1, name: 'Apple'}]
      expect(wrapper.instance().tagsToRender()).toMatchSnapshot()
    });
  });

  describe('removeIngredient', () => {
    it('should remove an ingredient from ingredientTags based on their id', () => {
      wrapper.state().ingredientTags = [
        {id: 1, name: 'Apple'},
        {id: 2, name: 'Grape'},
        {id: 3, name: 'Pear'}
      ]
      const expected = [
        {id: 2, name: 'Grape'},
        {id: 3, name: 'Pear'}
      ]
      const mockEvent = {target: {id: 1}}

      wrapper.instance().removeIngredient(mockEvent)
      expect(wrapper.state().ingredientTags).toEqual(expected)
    });
  });
});