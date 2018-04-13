/* eslint-disable */
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
      ingredient1 = 'Apple'
      ingredient2 = {null}
      ingredient3 = {null}
      ingredient4 = {null}
      ingredient5 = {null}
      ingredient1_id = {2}
      ingredient2_id = {null}
      ingredient3_id = {null}
      ingredient4_id = {null}
      ingredient5_id = {null}
      strength = {null}
      resale = '0'
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
});