import React, { Component } from 'react';
import IngredientFilter from '../IngredientFilter/IngredientFilter';
import NameFilter from '../NameFilter/NameFilter';
import EffectFilter from '../EffectFilter/EffectFilter';
import './Filter.css';

export class Filter extends Component {
  render() {
    return (
      <div className='Filter'>
        <h2 className='filter__category' >
          Recipe Name:
        </h2>
        <NameFilter />
        <h2 className='filter__category'>
          Type:
        </h2>
        <EffectFilter />
        <h2 className='filter__category'>
          Ingredients:
        </h2>
        <IngredientFilter />
      </div>
    );
  }
}

export default Filter;
