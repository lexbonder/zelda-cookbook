/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import IngredientTag from './IngredientTag';

describe('IngredientTag', () => {
  let wrapper;
  let mockId = '1';
  let mockName = 'Apple'
  let mockRemove = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<IngredientTag 
      id={mockId}
      name={mockName}
      remove={mockRemove}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should call mockRemove when clicked', () => {
    wrapper.find('button').simulate('click')
    expect(mockRemove).toHaveBeenCalled()
  });
});