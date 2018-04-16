import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTypeFilter, removeTypeFilter } from '../../actions';
import PropTypes from 'prop-types';
import './EffectFilter.css';

export class EffectFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEffect: 'Recipe Type'
    };
  }

  selectType = event => {
    const effect = event.target.value;
    if (effect !== 'Recipe Type') {
      this.props.addTypeFilter(effect);
    } else {
      this.props.removeTypeFilter();
    }
    this.setState({selectedEffect: effect});
  }

  resetSelect = () => {
    this.setState({selectedEffect: 'Recipe Type'});
    this.props.removeTypeFilter();
  }

  render() {
    const { selectedEffect } = this.state;
    return (
      <div className='EffectFilter'>
        <select
          onChange={ this.selectType }
          className='search-bar'
          value={ this.state.selectedEffect }
        >
          <option>Recipe Type</option>
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
          <option>Elixer</option>
        </select>
        <button
          onClick={ this.resetSelect }
          className={`button__clear-filter
            ${ selectedEffect === 'Recipe Type' ? 'button__clear-filter--hidden' : ''}`}
        >
          X
        </button>
      </div>
    );
  } 
}

const { func } = PropTypes;

EffectFilter.propTypes = {
  addTypeFilter: func,
  removeTypeFilter: func
};

export const MDTP = dispatch => ({
  addTypeFilter: effect => dispatch(addTypeFilter(effect)),
  removeTypeFilter: () => dispatch(removeTypeFilter())
});

export default connect(null, MDTP)(EffectFilter);