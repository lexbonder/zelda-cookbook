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
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    const { id } = event.target;
    this.toggleSearchBar(id);
    this.toggleSearchButton(id);
  }

  toggleSearchBar(id) {
    [...document.querySelectorAll('.search-bar')]
      .forEach(bar => bar.classList.add('search-bar--hidden'));
    document.querySelector(`.search-bar__${id}`)
      .classList.remove('search-bar--hidden');
  }

  toggleSearchButton(id) {
    [...document.querySelectorAll('.search-button')]
      .forEach(button => button.classList.remove('search-button--selected'));
    document.getElementById(id)
      .classList.add('search-button--selected');
  }

  render() {
    return (
      <div>
        <button
          className="search-button"
          onClick={this.handleClick}
          id="ingredient"
        >
          Ingredient
        </button>
        <button
          className="search-button
            search-button--selected"
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
            className="search-bar
              search-bar__recipe"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Select up to 5 ingredients"
            value={this.state.ingredientSearch}
            name="ingredientSearch"
            className="search-bar
              search-bar__ingredient
              search-bar--hidden"
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
