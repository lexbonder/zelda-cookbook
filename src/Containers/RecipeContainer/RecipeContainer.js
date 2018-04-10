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

  // recipes.filter( recipes => {
  //   return selctedingredents.includes &&
  //   selectedtype.includes &&
  // })

  renderRecipes = () => {
    const recipes = this.props.recipes

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

export const MSTP = ({ recipes }) => ({ recipes })

export default connect(MSTP)(RecipeContainer);
