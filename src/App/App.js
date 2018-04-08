import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="small-zelda-header"></div>
        </header>
        <nav></nav>
        <SearchBar />
      </div>
    )
  }
}

export default App;
