import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Zelda Cookbook</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
