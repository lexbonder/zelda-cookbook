import React from 'react';
import './RecipeCard.css';
// import PropTypes from 'prop-types';

const RecipeCard = (props) => {
    const {id,
          name, 
          hearts, 
          type, 
          duration, 
          notes, 
          ingredient1, 
          ingredient2, 
          ingredient3, 
          ingredient4, 
          ingredient5, 
          strength, 
          resale } = props
  
  const recipeHtml = <div className="recipe-card" id={ id }>
                        <img src="../assets/zelda-header.png" alt="Seafood Curry" />
                        <h1 className="recipe-name">Name: { name }</h1>
                        <h3 className="recipe-hearts">Hearts: { hearts }</h3>
                        <div className="recipe-details">
                          <h5 className="recipe-type">Type: { type }</h5>
                          <h5 className="strength">Strength: { strength }</h5>
                          <h5 className="duration">Duration: { duration }</h5>
                          <h5 className="resale">Resale: { resale }</h5>
                        </div>
                        <h3 className="recipe-notes">Notes: { notes }</h3>
                        <div className="ingredients">
                          <h3 className="ingredient1">{ ingredient1 ? ingredient1 : 'N/A'}</h3>
                          <h3 className="ingredient2">{ ingredient2 ? ingredient2 : 'N/A'}</h3>
                          <h3 className="ingredient3">{ ingredient3 ? ingredient3 : 'N/A'}</h3>
                          <h3 className="ingredient4">{ ingredient4 ? ingredient4 : 'N/A'}</h3>
                          <h3 className="ingredient5">{ ingredient5 ? ingredient5 : 'N/A'}</h3>
                        </div>
                     </div>        

  return (
    <div id="all-recipes">
      { recipeHtml }
    </div>
  )
}






export default RecipeCard;
