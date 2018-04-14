import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedRecipes } from '../../actions'
// import PropTypes from 'prop-types';
import './TypeTabs.css';

export class TypeTabs extends Component {
  constructor() {
    super()
  }

  selectedType = () => {
    const element = document.getElementById("dropDown");
    const effect = element.options[element.selectedIndex].value
    console.log(effect)
    this.props.selectedRecipes(effect)
  }

  render() {
    return (
      <select onChange={ this.selectedType } id="dropDown">
        <option>Choose Recipe Type</option>
        <option>Restore Hearts</option>
        <option>Restore Stamina</option>
        <option>Cold Resist</option>
        <option>Heat Resist</option>
        <option>Electric Resist</option>
        <option>Movement Speed</option>
        <option>Temporary Max Hearts</option>
        <option>Defense Boost</option>
        <option>Attack Power</option>
        <option>Stealth</option>
        <option>Elixers</option>
      </select>
    )
  } 
}

export const MDTP = dispatch => ({
  selectedRecipes: effect => dispatch(selectedRecipes(effect))  
})

export default connect(null, MDTP)(TypeTabs)