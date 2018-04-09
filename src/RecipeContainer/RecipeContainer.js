import React, { Component } from 'react';
import { getRecipes } from '../apiCalls';
// import { getRecipeData } from '../dataCleaner';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeContainer.css';

export default class RecipeContainer extends Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      rawRecipes: []
    }
  }

  async componentDidMount() {
    try {
      // const recipeType = this.props.location.pathname.slice(1);
      // console.log('recipeType', recipeType)
      const rawRecipes = await getRecipes();
      // const recipes = getRecipeData(rawRecipes);
      // console.log('recipes', recipes)
      this.setState({ rawRecipes })
    } catch(err) {
      console.log(`ERROR ComponentDidMount RecipeContainer: ${err}`);
    }
  }

  renderRecipes = () => {
    const recipes = this.state.rawRecipes

    if(recipes.length > 0) {
      const recipesToRender = recipes.map(recipe => {
        return <RecipeCard key={ recipe.id }
                           id={ recipe.id }
                           name={ recipe.name }
                           hearts={ recipe.hearts }
                           type={ recipe.type }
                           duration={ recipe.duration }
                           notes={ recipe.notes }
                           ingredient1={ recipe.ingredient1 }
                           ingredient2={ recipe.ingredient2 }
                           ingredient3={ recipe.ingredient3 }
                           ingredient4={ recipe.ingredient4 }
                           ingredient5={ recipe.ingredient5 }
                           strength={ recipe.strength }
                           resale={ recipe.resale } />
      })
      return recipesToRender
    }
  }

  render() {
    return (
      <div id="all-recipe-container">
        { this.renderRecipes() }
      </div>
    )
  }
}
