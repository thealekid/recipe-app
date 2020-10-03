import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = "ee0bfc54";
  const APP_KEY = "99333c79b9c5c2af50a8f368137615ec"

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  return (
    <div className="App"> 
    <form className="search-form">
      <input className="search-bar" type="text"/>
      <button className="search-button" type="submit">
      Search
      </button>
    </form>
    </div>
  )
}

export default App;
