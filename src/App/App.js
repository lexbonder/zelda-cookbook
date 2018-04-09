import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import RecipeContainer from '../RecipeContainer/RecipeContainer';
import './App.css';
// import { Route } from 'react-router-dom';

const App = () => (
  <div className="App">
    <header className="App-header">
      <div id="small-zelda-header" />
    </header>
    <SearchBar />
    <RecipeContainer />
  </div>
);

export default App;
