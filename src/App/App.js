import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';
// import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="small-zelda-header" />
        </header>
        <nav />
        <SearchBar />
      </div>
    );
  }
}

export default App;
