import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = "ee0bfc54";
  const APP_KEY = "99333c79b9c5c2af50a8f368137615ec"
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [counter, setCounter] = useState(0);

  useEffect (() => {
    console.log('UseEffect');
  })

  return (
    <div className="App"> 
    <form className="search-form">
      <input className="search-bar" type="text"/>
      <button onClick={() => setCounter(counter + 1)} 
      className="search-button" 
      type="submit"
      >
      {counter}
      </button>
      <h1>Test</h1>
    </form>
    </div>
  )
}

export default App;
