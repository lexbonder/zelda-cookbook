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
    type_image,
    duration, 
    notes,    
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

  const renderIngredients = () => {
    let ingredients = [];
    for (let i = 1; i <= 5; i++ ) {
      if (props[`ingredient${i}_image`]) {
        ingredients.push (
          <h3 key={i} className={`ingredient ${name} ${props[`ingredient${i}`]}`}>
            <img src={ props[`ingredient${i}_image`] } alt={ props[`ingredient${i}`] } />
            { props[`ingredient${i}`] }
          </h3>
        );
      }
    }
    return ingredients;
  };

  const renderTypeImage = () => {
    if (type_image) {
      return <img src={type_image} alt='Recipe Type Icon' className='type_image'/>;
    }
  };

  const renderNotes = () => {
    if (notes) {
      return <h3 className={`${ name } recipe-notes`}>Notes: { notes }</h3>;
    }
  };
  
  return (
    <div className="recipe-card-container">
      <article id={ id } className={ name } onClick={ clicked } >

        <div className={`${ name } recipe-details`}>
          <img src={ image } alt={ name } />
          <div className={`${ name } name-hearts`}>
            <h2 className={`${ name } recipe-name`}>{ name }</h2>
            <h3 className={`${ name } recipe-hearts`}>
              <img src={ heart } alt="Number Of Hearts"/>
              <span id="targetHeart">{ hearts }</span>
              <img id="green-rupee" src={ greenRupee } alt="Green Rupees Jewel"/>
              <p>{ resale }</p>
            </h3>
          </div>
          { renderTypeImage() }
        </div>

        { renderNotes() }

        <div className={`${ name } ingredients`}>
          { renderIngredients() }  
        </div>

        <div className={`${ name } recipe-specific-details`}>
          <h5 className={`${ name } strength`}>{ strength === null ? '' : 'Strength: ' + strength }</h5>
          <h5 className={`${ name } duration`}>{ duration === null ? '' : 'Duration: ' + duration }</h5> 
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
  type_image: string,
  duration: string, 
  notes: string,
  image: string,
  ingredient1: string, 
  ingredient2: string, 
  ingredient3: string, 
  ingredient4: string, 
  ingredient5: string,
  ingredient1_image: string, 
  ingredient2_image: string, 
  ingredient3_image: string, 
  ingredient4_image: string, 
  ingredient5_image: string,
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
