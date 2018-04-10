import React from 'react';
import PropTypes from 'prop-types';
import './IngredientTag.css';

const IngredientTag = ({ id, name, remove }) => (
  <h1
    id={id}
    className="ingredient-tag"
    onClick={remove}
  >
    {name}
  </h1>
);

const { number, string, func } = PropTypes;

IngredientTag.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  remove: func.isRequired,
};

export default IngredientTag;
