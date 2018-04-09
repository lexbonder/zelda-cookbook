import React from 'react';
import { shallow } from 'enzyme';
import RecipeContainer from './RecipeContainer';
import { getRecipes } from '../apiCalls';
import { getRecipeData } from '../dataCleaner';

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