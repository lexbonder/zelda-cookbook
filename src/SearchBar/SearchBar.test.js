/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

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
      recipeSearch: ''
    };

    expect(wrapper.state()).toEqual(expected);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
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
    it.skip('should match the snapshot when it is called', () => {
      // expect(wrapper.instance().toggleSearchBar('ingredient')).toMatchSnapshot();
    });
  });

  describe('toggleSearchButton', () => {
    it.skip('should match the snapshot when it is called', () => {
      // wrapper.instance().toggleSearchButton('recipe');
      // expect(wrapper).toMatchSnapshot();
    });
  });
});