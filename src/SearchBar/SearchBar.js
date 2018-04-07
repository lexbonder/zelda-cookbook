import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      recipes: [],
      ingredientSearch: '',
      recipeSearch: '',
      ingredientButton: false,
      recipeButton: true,
      ingredientBar: false,
      recipeBar: true
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
        recipeBar: !recipeBar
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

  render() {
    const {
      ingredientBar,
      recipeBar,
      ingredientButton,
      recipeButton
    } = this.state;

    return (
      <div>
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
        <form>
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
          <input
            type="text"
            placeholder="Select up to 5 ingredients"
            value={this.state.ingredientSearch}
            name="ingredientSearch"
            className={`search-bar
              search-bar__ingredient
              ${ingredientBar ? '' : 'search-bar--hidden'}
            `}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
