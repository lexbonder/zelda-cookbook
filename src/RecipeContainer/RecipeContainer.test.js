import React from 'react';
import { shallow } from 'enzyme';
import RecipeContainer from './RecipeContainer';

jest.mock('../apiCalls')

describe('RecipeContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RecipeContainer />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
});