import React from 'react';
import './IngredientTag.css';

const IngredientTag = ({id, name, remove}) => {
  return (
    <h1
      id={id}
      className="ingredient-tag"
      onClick={remove}
    >{name}</h1>
  )
}

export default IngredientTag;