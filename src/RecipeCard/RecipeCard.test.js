import React from 'react';
import { shallow } from 'enzyme';
import RecipeCard from './RecipeCard';

describe('RecipeCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RecipeCard
      id = {106}
      name = 'Baked Apple'
      hearts = '¾'
      type = 'Restore Hearts'
      duration = {null}
      notes = 'Open flame.'
      ingredient1 = {2}
      ingredient2 = {null}
      ingredient3 = {null}
      ingredient4 = {null}
      ingredient5 = {null}
      strength = {null}
      resale = '0'
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
});