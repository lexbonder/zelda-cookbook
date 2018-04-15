import React from 'react';
import PropTypes from 'prop-types';
import './IngredientTag.css';

const IngredientTag = ({ id, name, remove }) => {
  return (
    <div className="IngredientTag">
      <h1
        className="ingredient-name"
      >
        {name}
      </h1>
      <button className="button__clear-filter"
        onClick={remove}
        id={id}
      >
        X
      </button>
    </div>
  );
};

const { string, func } = PropTypes;

IngredientTag.propTypes = {
  id: string,
  name: string,
  remove: func,
};

export default IngredientTag;
