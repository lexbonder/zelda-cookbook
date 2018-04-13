import React, { Component } from 'react';
import { connect } from 'react-redux';
import { populateRecipes } from '../../actions'
// import PropTypes from 'prop-types';
import './TypeTabs.css';

export class TypeTabs extends Component {
  constructor() {
    super()
  }

  tabClicked = (e) => {
    const effect = e.target.id.replace('-', ' ')
    const allRecipes = this.props.recipes
    
    const matchingRecipes = allRecipes.filter(recipe => {
      let lowerCaseType = recipe.type.toLowerCase()
      return lowerCaseType.includes(effect)
    })
    this.props.populateRecipes(matchingRecipes)
  }

  render() {
    return (
      <nav onClick={(e) => this.tabClicked(e)} >
        <ul>
        <li><a id="restore-hearts">Restore Hearts</a></li>
        <li><a id="stamina">Restore Stamina</a></li>
        <li><a id="cold">Cold Resist</a></li>
        <li><a id="heat">Heat Resist</a></li>
        <li><a id="electric">Electric Resist</a></li>
        <li><a id="speed">Movement Speed</a></li>
        <li><a id="temp">Temp Max Hearts</a></li>
        <li><a id="defense">Defense Boost</a></li>
        <li><a id="attack">Attack Power</a></li>
        <li><a id="stealth">Stealth Recipes</a></li>
        <li><a id="elixer">Elixer Recipes</a></li>
        </ul>
      </nav>
    )
  } 
}

export const MSTP = ({ recipes }) => ({
  recipes
})

export const MDTP = dispatch => ({
  populateRecipes: matchingRecipes => dispatch(populateRecipes(matchingRecipes))
})

export default connect(MSTP, MDTP)(TypeTabs)