import React from 'react';
import './RecipeCard.css';
import PropTypes from 'prop-types';
import greenRupee from '../../assets/GreenRupee.png'
import seafoodCurry from '../../assets/Seafoodcurry.jpg'

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

  const clicked = (e) => {
    const recipeTarget = e.target
    const targetArticle = recipeTarget.closest('article')
    if(targetArticle.className.includes('active-recipe')) {
      targetArticle.classList.remove('active-recipe')
    } else {
      targetArticle.classList.add('active-recipe')      
    }
  }
  
  const recipeHtml = <article id={ id } className={ name } onClick={(e) => clicked(e)} >
  
                        <div className={`${ name } recipe-details`}>
                          <img src={seafoodCurry} alt="Seafood Curry" />
                          <div className={`${ name } name-hearts`}>
                            <h2 className={`${ name } recipe-name`}>Name: { name }</h2>
                            <h3 className={`${ name } recipe-hearts`}>Hearts: { hearts }</h3>
                          </div>
                          <h5 className={`${ name } recipe-type`}>Type: { type }</h5>
                        </div>

                        <h3 className={`${ name } recipe-notes`}>Notes: { notes }</h3>

                        <div className={`${ name } recipe-specific-details`}>
                          <h5 className={`${ name } strength`}>Strength: { strength }</h5>
                          <h5 className={`${ name } duration`}>Duration: { duration }</h5>
                          <h5 className={`${ name } resale`}><img src={greenRupee} alt="Green Rupees Jewel"/><p>{ resale }</p></h5>
                        </div>

                        <div className={`${ name } ingredients`}>
                          <h3 className={`${ name } ingredient1`}>{ ingredient1 }</h3>
                          <h3 className={`${ name } ingredient2`}>{ ingredient2 }</h3>
                          <h3 className={`${ name } ingredient3`}>{ ingredient3 }</h3>
                          <h3 className={`${ name } ingredient4`}>{ ingredient4 }</h3>
                          <h3 className={`${ name } ingredient5`}>{ ingredient5 }</h3>
                        </div>
                     </article>        

  return (
    <div id="recipe-card-container">
      { recipeHtml }
    </div>
  )
}

RecipeCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string, 
  hearts: PropTypes.string, 
  type: PropTypes.string, 
  duration: PropTypes.string, 
  notes: PropTypes.string, 
  ingredient1: PropTypes.number, 
  ingredient2: PropTypes.number, 
  ingredient3: PropTypes.number, 
  ingredient4: PropTypes.number, 
  ingredient5: PropTypes.number, 
  strength: PropTypes.string, 
  resale: PropTypes.string,
  clicked: PropTypes.func
}

export default RecipeCard;
