import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import './RecipeContainer.css';

export class RecipeContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
    }
  }

  filterRecipes = (allRecipes) => {
    const { ingredients } = this.props.filter
    let filtered = allRecipes;
    if (ingredients.length) {
      filtered = allRecipes.filter( recipe => {
        let match = 0;
        ingredients.forEach( ingredient => {
          for (let i = 1; i <= 5; i++) {
              console.log(typeof(ingredient.id))
            if (parseInt(ingredient.id, 10) === recipe[`ingredient${i}_id`]) {
              match++;
            }
          }
        })
        return match === ingredients.length;
      })
      // return filtered
    } 
//    else if (matches string in recipe search)
//    else if (matches types selected in )
// 
      return filtered
  }

  renderRecipes = () => {
    const recipes = this.filterRecipes(this.props.recipes)

    if(recipes.length > 0) {
      const recipesToRender = recipes.map(recipe => {
        return <RecipeCard
          key={ recipe.id }
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
          resale={ recipe.resale }
        />
      })
      return recipesToRender
    } else {
      return <h1>No recipes match your search</h1>
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

export const MSTP = ({ recipes, filter }) => ({ recipes, filter })

export default connect(MSTP)(RecipeContainer);
