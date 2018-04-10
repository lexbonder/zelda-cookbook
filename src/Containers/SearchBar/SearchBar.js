import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIngredientNames } from '../../dataCleaner';
import IngredientTag from '../../Components/IngredientTag/IngredientTag';
import { addIngredientFilter, removeIngredientFilter } from '../../actions';
import './SearchBar.css';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientSearch: '',
      recipeSearch: '',
      ingredientButton: false,
      recipeButton: true,
      ingredientBar: false,
      recipeBar: true,
      searchFocus: true,
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick = event => {
    const { id } = event.target;
    this.toggleSearchBar(id);
    this.toggleSearchButton(id);
  }

  toggleSearchBar = id => {
    const { ingredientBar, recipeBar } = this.state
    if (this.state[`${id}Bar`] === false) {
      this.setState({
        ingredientBar: !ingredientBar,
        recipeBar: !recipeBar,
        ingredientSearch: '',
        recipeSearch: ''
      })
    }
  }

  toggleSearchButton = id => {
    const { ingredientButton, recipeButton } = this.state
    if (this.state[`${id}Button`] === false) {
      this.setState({
        ingredientButton: !ingredientButton,
        recipeButton: !recipeButton
      })
    }
  }

  ingredientListToRender = () => {
    const ingredientNames = getIngredientNames(this.props.ingredients)
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
      </p>)
  }

  selectIngredient = (event) => {
    const { ingredients } = this.props.filter;
    const { innerText , id } = event.target;
    const newIngredient = { id, name: innerText };
    const checkDupe = ingredients.some(tag => tag.name === newIngredient.name)
    if ( !checkDupe && ingredients.length < 5 ) {
      this.props.addIngredientFilter(newIngredient)
    }
    this.setState({ searchFocus: false, ingredientSearch: '' })
  }

  handleFocus = () => {
    this.setState({ searchFocus: true })
  }

  handleBlur = () => {
    setTimeout(() => {
      this.setState({ searchFocus: false })
    }, 150)
  }

  tagsToRender = () => {
    const { ingredients } = this.props.filter;
    return ingredients.map(tag => <IngredientTag
      {...tag}
      key={tag.id}
      remove={this.removeIngredient}
    />)
  }

  removeIngredient = (event) => {
    const { id } = event.target;
    this.props.removeIngredientFilter(id)
  }
  
  render() {
    const {
      ingredientBar,
      recipeBar,
      ingredientButton,
      recipeButton
    } = this.state;

    return (
      <div>
        <section className="SearchBar">
          <button
            className={`search-button
              ${ingredientButton ? 'search-button--selected' : ''}
            `}
            onClick={this.handleClick}
            id="ingredient"
          >
            Ingredient
          </button>
          <button
            className={`search-button
              ${recipeButton ? 'search-button--selected' : ''}
            `}
            onClick={this.handleClick}
            id="recipe"
          >
            Recipe
          </button>
          <input
            type="text"
            placeholder="Search recipes"
            value={this.state.recipeSearch}
            name="recipeSearch"
            className={`search-bar
              search-bar__recipe
              ${recipeBar ? '' : 'search-bar--hidden'}
            `}
            onChange={this.handleChange}
          />
          <div 
            className={`
              search-bar__ingredient
              ${ingredientBar ? '' : 'search-bar--hidden'}
            `}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          >
            <input
              type="text"
              placeholder="Select up to 5 ingredients"
              value={this.state.ingredientSearch}
              name="ingredientSearch"
              className={`search-bar
              `}
              onChange={this.handleChange}
            />
            <section
              className={`search-results__container
                ${this.state.searchFocus ?
                  'search-results__containter--show' :
                  ''
                }
              `}
            >
              {this.ingredientListToRender()}
            </section>
          </div>
        </section>
        <section className="ingredientTag-container">
          {this.tagsToRender()}
        </section>
      </div>
    );
  }
}

export const MSTP = ({ingredients, filter}) => ({
  ingredients,
  filter
});

export const MDTP = dispatch => ({
  addIngredientFilter: ingredient => dispatch(addIngredientFilter(ingredient)),
  removeIngredientFilter: id => dispatch(removeIngredientFilter(id))
})

export default connect(MSTP, MDTP)(SearchBar);
