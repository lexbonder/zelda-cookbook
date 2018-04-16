// eslint-disable-next-line
import React from 'react';
import './RecipeCard.css';
import PropTypes from 'prop-types';
import heart from '../../assets/heart.png';
import greenRupee from '../../assets/GreenRupee.png';

const RecipeCard = (props) => {
  const {
    id,
    image,
    name, 
    hearts, 
    type, 
    duration, 
    notes, 
    ingredient1,
    ingredient1Image, 
    ingredient2,
    ingredient2Image,    
    ingredient3,
    ingredient3Image,     
    ingredient4, 
    ingredient4Image,     
    ingredient5, 
    ingredient5Image,     
    strength, 
    resale
  } = props;

  const clicked = (e) => {
    const recipeTarget = e.target;
    const targetArticle = recipeTarget.closest('article');
    if(targetArticle.className.includes('active-recipe')) {
      targetArticle.classList.remove('active-recipe');
    } else {
      targetArticle.classList.add('active-recipe');  
    }
  };
  
  return (
    <div className="recipe-card-container">
      <article id={ id } className={ name } onClick={clicked} >

        <div className={`${ name } recipe-details`}>
          <img src={ image } alt={ name } />
          <div className={`${ name } name-hearts`}>
            <h2 className={`${ name } recipe-name`}>{ name }</h2>
            <h3 className={`${ name } recipe-hearts`}><img src={ heart } alt="Number Of Hearts"/><span id="targetHeart">{ hearts }</span></h3>
          </div>
          <h5 className={`${ name } recipe-type`}>Type: { type }</h5>
        </div>

        <h3 className={`${ name } recipe-notes`}>{ notes === null ? '' : 'Notes: ' +  notes }</h3>

        <div className={`${ name } recipe-specific-details`}>
          <h5 className={`${ name } strength`}>Strength: { strength }</h5>
          <h5 className={`${ name } duration`}>Duration: { duration }</h5>
          <h5 className={`${ name } resale`}><img src={ greenRupee } alt="Green Rupees Jewel"/><p>{ resale }</p></h5>
        </div>

        <div className={`${ name } ingredients`}>
          <h3 className={`${ name } ingredient1`}><img src={ ingredient1Image } alt={ name } />{ ingredient1 }</h3>
          <h3 className={`${ name } ingredient2`}><img src={ ingredient2Image } alt={ name } />{ ingredient2 }</h3>
          <h3 className={`${ name } ingredient3`}><img src={ ingredient3Image } alt={ name } />{ ingredient3 }</h3>
          <h3 className={`${ name } ingredient4`}><img src={ ingredient4Image } alt={ name } />{ ingredient4 }</h3>
          <h3 className={`${ name } ingredient5`}><img src={ ingredient5Image } alt={ name } />{ ingredient5 }</h3>
        </div>
      </article>
    </div>
  );
};

const { number, string, func } = PropTypes;

RecipeCard.propTypes = {
  id: number,
  name: string, 
  hearts: string, 
  type: string, 
  duration: string, 
  notes: string, 
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
  strength: string, 
  resale: string,
  clicked: func
};

export default RecipeCard;
