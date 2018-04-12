import React from 'react';
// import PropTypes from 'prop-types';
import './TypeTabs.css';

const TypeTabs = () => (
    <nav onClick={(e) => tabClicked(e)} >
      <ul>
      <li><a id="restore-hearts">Restore Hearts</a></li>
      <li><a id="restore-stamina">Restore Stamina</a></li>
      <li><a id="cold-resist">Cold Resist</a></li>
      <li><a id="heat-resist">Heat Resist</a></li>
      <li><a id="electric-resist">Electric Resist</a></li>
      <li><a id="movement-speed">Movement Speed</a></li>
      <li><a id="temp-max-hearts">Temp Max Hearts</a></li>
      <li><a id="defense-boost">Defense Boost</a></li>
      <li><a id="attack-power">Attack Power</a></li>
      <li><a id="stealth">Stealth Recipes</a></li>
      <li><a id="elixers">Elixer Recipes</a></li>
      </ul>
    </nav>
)

const tabClicked = (e) => {
  const targetTab = e.target.id
  const effect = targetTab.replace('-', ' ')
  console.log(effect)
}

export default TypeTabs;