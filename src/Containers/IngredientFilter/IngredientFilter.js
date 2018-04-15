import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getIngredientNames } from '../../dataCleaner';
import IngredientTag from '../../Components/IngredientTag/IngredientTag';
import {
  addIngredientFilter,
  removeIngredientFilter
} from '../../actions';


export class IngredientFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientSearch: '',
      searchFocus: false,
    };
  }

  handleChange = event => {
    const ingredientSearch = event.target.value;
    this.setState({ ingredientSearch });
  }

  handleFocus = () => {
    this.setState({ searchFocus: true });
  }

  handleBlur = () => {
    setTimeout(() => {
      this.setState({ searchFocus: false });
    }, 150);
  }

  ingredientListToRender = () => {
    const ingredientNames = getIngredientNames(this.props.ingredients);
    return ingredientNames
      .filter(food => food.name.toLowerCase().includes(
        this.state.ingredientSearch.toLowerCase())
      )
      .map(food => <p
        key={food.id} 
        className='search-results__item'
        id={food.id}
        onClick={this.selectIngredient}
      >
        {food.name}
      </p>);
  }

  selectIngredient = (event) => {
    const { ingredientFilter } = this.props;
    const { innerText , id } = event.target;
    const newIngredient = { id, name: innerText };
    const checkDupe = ingredientFilter.some(tag => tag.name === newIngredient.name);
    if ( !checkDupe && ingredientFilter.length < 5 ) {
      this.props.addIngredientFilter(newIngredient);
    }
    this.setState({ searchFocus: false, ingredientSearch: '' });
  }

  tagsToRender = () => {
    const { ingredientFilter } = this.props;
    return ingredientFilter.map(tag => <IngredientTag
      {...tag}
      key={tag.id}
      remove={this.removeIngredient}
    />);
  }

  removeIngredient = (event) => {
    const { id } = event.target;
    this.props.removeIngredientFilter(id);
  }

  render() {
    return (
      <div>
        
        <div 
          className='search-bar__ingredient'
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        >
          <input
            type='text'
            placeholder='Select up to 5'
            value={this.state.ingredientSearch}
            className='search-bar'
            onChange={this.handleChange}
          />
          <section className={`
            search-results__container
            ${this.state.searchFocus ? 'search-results__containter--show' : ''}
          `}>
            {this.ingredientListToRender()}
          </section>
        </div>
        <section className='ingredientTag-container'>
          {this.tagsToRender()}
        </section>
      </div>
    );
  }
}

const { arrayOf, shape, string, number, array, func } = PropTypes;

IngredientFilter.propTypes = {
  ingredients: arrayOf(shape({
    name: string,
    id: number
  })),
  ingredientFilter: array,
  addIngredientFilter: func,
  removeIngredientFilter: func,
};

export const MSTP = ({ingredients, ingredientFilter}) => ({
  ingredients,
  ingredientFilter
});

export const MDTP = dispatch => ({
  addIngredientFilter: ingredient => dispatch(addIngredientFilter(ingredient)),
  removeIngredientFilter: id => dispatch(removeIngredientFilter(id))
});

export default connect(MSTP, MDTP)(IngredientFilter);