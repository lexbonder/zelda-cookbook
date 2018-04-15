/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { NameFilter, MDTP } from './NameFilter';
import { updateNameFilter } from '../../actions';

jest.useFakeTimers();

describe('NameFilter', () => {
  let wrapper;
  let mockUpdateNameFilter = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<NameFilter 
      updateNameFilter = { mockUpdateNameFilter }
    />)
  })

  it('should have a default state', () => {
    const expected = {
      recipeSearch: '',
    };

    expect(wrapper.state()).toEqual(expected);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should set state with a new recipe name', () => {
      const event = { target: { 
        value: 'asdf'
      }};

      wrapper.instance().handleChange(event);
      expect(wrapper.state().recipeSearch).toEqual('asdf');
    });

    it('should wait until the user is finished typing, then call updateNameFilter with the value in recipeSearch', () => {
      const event = { target: { 
        name: 'recipeSearch',
        value: 'Pie'
      }};
      wrapper.instance().handleChange(event)
      jest.runAllTimers()
      expect(mockUpdateNameFilter).toHaveBeenCalledWith('Pie')
    });
  });

  describe('resetSearch', () => {
    it('should call updateNameFilter with an empty string', () => {
      wrapper.instance().resetSearch();
      expect(mockUpdateNameFilter).toHaveBeenCalledWith('');
    });

    it('should set this.state.recipeSearch to an empty string', () => {
      wrapper.setState({ recipeSearch: 'asdf' })
      expect(wrapper.state().recipeSearch).toEqual('asdf')
      wrapper.instance().resetSearch();
      expect(wrapper.state().recipeSearch).toEqual('')
    });
  });
});

describe('MDTP', () => {
  it('should call dispatch when updateNameFilter is called', () => {
    const mockDispatch = jest.fn();
    const mockName = 'Pie';
    const result = MDTP(mockDispatch);

    result.updateNameFilter(mockName);
    expect(mockDispatch).toHaveBeenCalledWith(updateNameFilter(mockName));
  });
});