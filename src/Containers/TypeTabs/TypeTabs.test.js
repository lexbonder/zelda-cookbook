/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { TypeTabs, MDTP } from './TypeTabs';
import { addTypeFilter } from '../../actions';

describe('TypeTabs', () => {
  let wrapper;
  let mockAddTypeFilter = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<TypeTabs 
      addTypeFilter = { mockAddTypeFilter }
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('selectedType', () => {
    it('should call addTypeFilter with the selected Type of recipe', () => {
      const mockEvent = { target: { value: 'Restore Hearts'}};
      wrapper.instance().selectedType(mockEvent);

      expect(mockAddTypeFilter).toHaveBeenCalledWith('Restore Hearts');
    });
  });

  describe('MDTP', () => {
    it('should call dispatch when addTypeFilter is called', () => {
      const mockDispatch = jest.fn();
      const mockType = 'Restore Hearts';
      const result = MDTP(mockDispatch)

      result.addTypeFilter(mockType);
      expect(mockDispatch).toHaveBeenCalledWith(addTypeFilter(mockType));
    })
  })
});
