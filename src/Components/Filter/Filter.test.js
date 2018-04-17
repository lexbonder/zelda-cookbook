/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Filter from './Filter';

describe('Filter', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Filter />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });  
});