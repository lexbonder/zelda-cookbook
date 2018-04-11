import React from 'react';
import { shallow } from 'enzyme';
import { RecipeContainer } from './RecipeContainer';

describe('RecipeContainer', () => {
  let wrapper;
  let mockFilter = {ingredients: []}
  let mockRecipes = []

  beforeEach(() => {
    wrapper = shallow(<RecipeContainer
      filter={mockFilter}
      recipes={mockRecipes}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
});