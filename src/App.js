import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  // 1. A list (array) of restaurant names
  const restaurantList = ["Bamboo", "King Curry", "Brooklyn Carreta", "Chipotle"];
  // 2. Some state to store the "picked" restaurant (hint: useState)
  const [selectedRestaurant, setSelectedRestaurant] = useState("");

  // 3. A function that picks a random one from the list
  function selectRestaurant() {
  const randomIndex = Math.floor(Math.random() * restaurantList.length);
  setSelectedRestaurant(restaurantList[randomIndex]);
  }

  return (
  // 4. Return some JSX with:
  //    - a button that triggers the function
  //    - something to display the result
  <div className = "main-container">
  <button onClick = {selectRestaurant}>Let's Eat</button>
  <h1>Here's where you're eating:</h1>
  <p>{selectedRestaurant}</p>
  </div>
  );
}

export default App;
