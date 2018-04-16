import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import './RecipeContainer.css';

export class RecipeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  filterByIngredient = recipes => {    
    const { ingredientFilter } = this.props;

    if (ingredientFilter.length) {
      const filtered = recipes.filter( recipe => {
        let match = 0;
        ingredientFilter.forEach( ingredient => {
          for (let i = 1; i <= 5; i++) {
            if (parseInt(ingredient.id, 10) === recipe[`ingredient${i}_id`]) {
              match++;
            }
          }
        });
        return match === ingredientFilter.length;
      });
      return filtered;
    } else {
      return recipes;
    }
  }

  filterByName = recipes => {
    const { nameFilter } = this.props;
    if (nameFilter) {
      return recipes.filter(recipe => recipe.name.toLowerCase().includes(
        nameFilter.toLowerCase())
      );
    } else {
      return recipes;
    }
  }

  filterByType = recipes => {
    const { typeFilter } = this.props;
    if (typeFilter) {
      return recipes.filter(recipe => recipe.type === typeFilter);
    } else {
      return recipes;
    }
  }

  filterRecipes = (allRecipes) => {
    const onceFiltered = this.filterByIngredient(allRecipes);
    const twiceFiltered = this.filterByName(onceFiltered);
    const thriceFiltered = this.filterByType(twiceFiltered);
    return thriceFiltered;
  }

  renderRecipes = () => {
    const recipes = this.filterRecipes(this.props.recipes);

    if(recipes.length) {      
      const recipesToRender = recipes.map(recipe => {
        return <RecipeCard
          key={ recipe.id }
          id={ recipe.id }
          image={ recipe.image }
          name={ recipe.name }
          hearts={ recipe.hearts }
          type={ recipe.type }
          duration={ recipe.duration }
          notes={ recipe.notes }
          ingredient1={recipe.ingredient1}
          ingredient2={ recipe.ingredient2 }
          ingredient3={ recipe.ingredient3 }
          ingredient4={ recipe.ingredient4 } 
          ingredient5={ recipe.ingredient5 }
          strength={ recipe.strength }
          resale={ recipe.resale }
        />;
      });
      return recipesToRender;
    } else {
    return <div id="loading"></div>;
    }
  }

  render() {
    return (
      <div id="all-recipe-container">
        { this.renderRecipes() }
      </div>
    );
  }
}

const { arrayOf, shape, number, string, array } = PropTypes;

RecipeContainer.propTypes = {
  recipes: arrayOf(shape({
    id: number,
    category: string,
    hearts: string,
    name: string,
    notes: string,
    resale: string,
    type: string,
    duration: string,
    strength: string,
    ingredient1: string,
    ingredient2: string,
    ingredient3: string,
    ingredient4: string,
    ingredient5: string,
    ingredient1_id: number,
    ingredient2_id: number,
    ingredient3_id: number,
    ingredient4_id: number,
    ingredient5_id: number,
    created_at: string,
    updated_at: string
  })),
  ingredientFilter: array,
  nameFilter: string,
  typeFilter: string
};

export const MSTP = (props) => {
  const {
    recipes,
    ingredientFilter,
    nameFilter,
    typeFilter
  } = props;

  return {
    recipes,
    ingredientFilter,
    nameFilter,
    typeFilter
  };
};

export default connect(MSTP)(RecipeContainer);
