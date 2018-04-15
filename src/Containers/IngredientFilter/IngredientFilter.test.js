/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { IngredientFilter, MSTP, MDTP } from './IngredientFilter';
import * as dataCleaner from '../../dataCleaner';
import {
  addIngredientFilter,
  removeIngredientFilter,
} from '../../actions';

jest.mock('../../dataCleaner');
jest.useFakeTimers();


describe('IngredientFilter', () => {
  let wrapper;
  let mockIngredients = [];
  let mockIngredientFilter = [];
  let mockAddIngredientFilter = jest.fn();
  let mockRemoveIngredientFilter = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<IngredientFilter
      ingredients={ mockIngredients }
      ingredientFilter = { mockIngredientFilter }
      addIngredientFilter = { mockAddIngredientFilter }
      removeIngredientFilter = { mockRemoveIngredientFilter }
    />);
  });

  it('should have a default state', () => {
    const expected = {
      ingredientSearch: '',
      searchFocus: false
    };

    expect(wrapper.state()).toEqual(expected);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should set ingredientSearch in state', () => {
      const mockEvent = { target: { 
        value: 'qwerty'
      }};

      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state().ingredientSearch).toEqual('qwerty');
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
    it('should not call addIngredientFilter if the object is already selected', () => {
      wrapper = shallow(<IngredientFilter
        ingredients={ mockIngredients }
        ingredientFilter = { [{id: '1', name: 'Apple'}] }
        addIngredientFilter = { mockAddIngredientFilter }
        removeIngredientFilter = { mockRemoveIngredientFilter }
      />)

      const mockEvent = { target: {id: '1', innerText: 'Apple'}}
      wrapper.instance().selectIngredient(mockEvent)
      expect(mockAddIngredientFilter).not.toHaveBeenCalled()
    });

    it('should not call addIngredientFilter if there are 5 ingredients already', () => {
      wrapper = shallow(<IngredientFilter
        ingredients={ mockIngredients }
        ingredientFilter = {[
          {id: '0', name: 'Chicken'},
          {id: '2', name: 'Grape'},
          {id: '3', name: 'Pear'},
          {id: '4', name: 'Fish'},
          {id: '5', name: 'Tuna'}
        ]}
        addIngredientFilter = { mockAddIngredientFilter }
        removeIngredientFilter = { mockRemoveIngredientFilter }
      />)
      const mockEvent = { 
        target: {
          id: '1', innerText: 'Apple'
        }
      }
      wrapper.instance().selectIngredient(mockEvent)
      expect(mockAddIngredientFilter).not.toHaveBeenCalled()
    });

    it('should call this.props.addIngredientFilter with a new ingredient', () => {
      const mockEvent = { target: {id: '1', innerText: 'Apple'}}
      const expected = {id: '1', name: 'Apple'}
      wrapper.instance().selectIngredient(mockEvent)
      expect(mockAddIngredientFilter).toHaveBeenCalledWith(expected)
    });
  });

  describe('tagsToRender', () => {
    it('should return tags depending on what is in the filters ingredients array', () => {
      wrapper = shallow(<IngredientFilter
        ingredients={ mockIngredients }
        ingredientFilter = {[
          {id: '0', name: 'Chicken'},
          {id: '2', name: 'Grape'},
          {id: '3', name: 'Pear'},
          {id: '4', name: 'Fish'},
          {id: '5', name: 'Tuna'}
        ]}
        addIngredientFilter = { mockAddIngredientFilter }
        removeIngredientFilter = { mockRemoveIngredientFilter }
      />)
      expect(wrapper.instance().tagsToRender()).toMatchSnapshot()
    });
  });

  describe('removeIngredient', () => {
    it('should call removeIngredientFilter with the selected id', () => {
      const mockEvent = {target: {id: 1}}

      wrapper.instance().removeIngredient(mockEvent)
      expect(mockRemoveIngredientFilter).toHaveBeenCalledWith(1)
    });
  });
});

describe('MSTP', () => {
  it('should return an object with ingredients and a filter object', () => {
    const mockState = {
      ingredients: [{
        id: '1',
        name: 'Apple',
      }],
      ingredientFilter: []
    }
    const mapped = MSTP(mockState);

    expect(mapped.ingredients).toEqual([{
      id: '1',
      name: 'Apple',
    }]);
    expect(mapped.ingredientFilter).toEqual([]);
  });
});

describe('MDTP', () => {
  it('should call dispatch when addIngredientFilter or removeIngredientFilter are called', () => {
    const mockDispatch = jest.fn();
    const mockIngredient = { id: '1', name: 'Apple' };
    const mockId = 1;
    const result = MDTP(mockDispatch);

    result.addIngredientFilter(mockIngredient);
    expect(mockDispatch).toHaveBeenCalledWith(addIngredientFilter(mockIngredient));

    result.removeIngredientFilter(mockId);
    expect(mockDispatch).toHaveBeenCalledWith(removeIngredientFilter(mockId));
  });
});