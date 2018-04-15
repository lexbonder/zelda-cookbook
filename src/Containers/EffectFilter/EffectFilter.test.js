/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { EffectFilter, MDTP } from './EffectFilter';
import { addTypeFilter, removeTypeFilter } from '../../actions';

describe('EffectFilter', () => {
  let wrapper;
  let mockAddTypeFilter = jest.fn();
  let mockRemoveTypeFilter = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<EffectFilter 
      addTypeFilter = { mockAddTypeFilter }
      removeTypeFilter = { mockRemoveTypeFilter }
    />);
  });

  it('should have a default state', () => {
    const expected = {
      selectedEffect: 'Recipe Type'
    }

    expect(wrapper.state()).toEqual(expected)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('selectedType', () => {
    it('should call addTypeFilter with the selected Type of recipe', () => {
      const mockEvent = { target: { value: 'Restore Hearts'}};
      wrapper.instance().selectType(mockEvent);

      expect(mockAddTypeFilter).toHaveBeenCalledWith('Restore Hearts');
    });

    it('should call removeTypeFilter if the selected effect is Recipe Type', () => {
      const mockEvent = { target: { value: 'Recipe Type'}};
      wrapper.instance().selectType(mockEvent);

      expect(mockRemoveTypeFilter).toHaveBeenCalled();
    });

    it('should set the state to the selected effect', () => {
      const mockEvent = { target: { value: 'Restore Hearts'}};
      wrapper.instance().selectType(mockEvent);

      expect(wrapper.state().selectedEffect).toEqual('Restore Hearts')
    });
  });

  describe('resetSelect', () => {
    it('should set the state of selectedEffect to Recipe Type', () => {
      wrapper.setState({ selectedEffect: 'Restore Hearts' });
      expect(wrapper.state().selectedEffect).toEqual('Restore Hearts');

      wrapper.instance().resetSelect()
      expect(wrapper.state().selectedEffect).toEqual('Recipe Type');
    });

    it('should call removeTypeFilter', () => {
      wrapper.instance().resetSelect();
      expect(mockRemoveTypeFilter).toHaveBeenCalled();
    });
  });

});
  
describe('MDTP', () => {
  it('should call dispatch when addTypeFilter is called', () => {
    const mockDispatch = jest.fn();
    const mockType = 'Restore Hearts';
    const result = MDTP(mockDispatch)

    result.addTypeFilter(mockType);
    expect(mockDispatch).toHaveBeenCalledWith(addTypeFilter(mockType));

    result.removeTypeFilter();
    expect(mockDispatch).toHaveBeenCalledWith(removeTypeFilter())
  });
});
