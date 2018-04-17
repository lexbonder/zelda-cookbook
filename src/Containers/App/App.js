import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRecipes, getIngredients } from '../../apiCalls';
import Filter from '../../Components/Filter/Filter';
import RecipeContainer from '../RecipeContainer/RecipeContainer';
import { populateRecipes, populateIngredients } from '../../actions';
import './App.css';
// import { Route } from 'react-router-dom';

export class App extends Component {
  
  componentDidMount = async () => {
    try {
      const ingredients = await getIngredients();
      const recipes = await getRecipes();
      this.props.populateRecipes(recipes);
      this.props.populateIngredients(ingredients);
    } catch (error) {
      throw Error(error);
    }
  }

  render(){
    return (
      <div className="App">
        <aside className="sidebar">
          <section id="small-zelda-header"></section>
          <Filter />
        </aside>
        <RecipeContainer />
      </div>
    );
  }
}

const { func } = PropTypes;

App.propTypes = {
  populateRecipes: func,
  populateIngredients: func
};

export const MDTP = dispatch => ({
  populateRecipes: recipes => dispatch(populateRecipes(recipes)),
  populateIngredients: ingredients => dispatch(populateIngredients(ingredients))
});

export default connect(null, MDTP)(App);
