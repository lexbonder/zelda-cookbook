import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateNameFilter } from '../../actions';

let timeout;

export class NameFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeSearch: ''
    };
  }

  handleChange = event => {
    const recipeSearch = event.target.value;
    this.setState({ recipeSearch });
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      this.props.updateNameFilter(recipeSearch);
    }, 500);
  }

  resetSearch = () => {
    this.props.updateNameFilter('');
    this.setState({ recipeSearch: ''});
  }

  render() {
    const { recipeSearch } = this.state;
    return (
      <div className='NameFilter'>
        <input
          type="text"
          placeholder="Recipe Name"
          value={this.state.recipeSearch}
          className='search-bar search-bar__recipe'
          onChange={this.handleChange}
        />
        <button
          onClick={ this.resetSearch }
          className={`button__clear-filter
            ${ !recipeSearch ? 'button__clear-filter--hidden' : ''}`}
        >
          X
        </button>
      </div>
    );
  }
}

const { func } = PropTypes;

NameFilter.propTypes = {
  updateNameFilter: func
};

export const MDTP = dispatch => ({
  updateNameFilter: name => dispatch(updateNameFilter(name))
});

export default connect(null, MDTP)(NameFilter);