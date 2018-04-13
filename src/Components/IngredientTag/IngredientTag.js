// eslint-disable-next-line
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

const { string, func } = PropTypes;

IngredientTag.propTypes = {
  id: string,
  name: string,
  remove: func,
};

export default IngredientTag;
