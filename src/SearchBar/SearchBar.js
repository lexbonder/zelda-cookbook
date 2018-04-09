import React, { Component } from 'react';
import { getIngredients } from '../apiCalls';
import { getIngredientNames } from '../dataCleaner';
import IngredientTag from '../IngredientTag/IngredientTag';
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
      recipeBar: true,
      ingredientTags: [],
      searchFocus: false,
    };
  }

  componentDidMount = async () => {
    const rawIngredients = await getIngredients();
    const ingredients = getIngredientNames(rawIngredients);
    this.setState({ ingredients });
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

  ingredientListToRender = () => {
    return this.state.ingredients
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
    const { ingredientTags } = this.state
    const { innerText , id } = event.target;
    const newIngredient = { id, name: innerText };
    const checkDupe = ingredientTags.some(tag => tag.name === newIngredient.name)
    if ( !checkDupe && ingredientTags.length < 5 ) {
      this.setState({ ingredientTags: [...ingredientTags, newIngredient]})
    }
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
    const { ingredientTags } = this.state;
    return ingredientTags.map(tag => <IngredientTag
      {...tag}
      key={tag.id}
      remove={this.removeIngredient}
    />)
  }

  removeIngredient = (event) => {
    const { id } = event.target;
    const ingredientTags = this.state.ingredientTags.filter(tag => tag.id !== id);
    this.setState({ ingredientTags });
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
