import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { getRestaurants } from './helpers/apiCall';
import Restaurants from './Restaurants'

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    console.log(restaurants)
    getRestaurants()
      .then(data => setRestaurants(data))
    console.log(restaurants)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Restaurants restaurants={restaurants}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App;
