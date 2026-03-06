import { useState } from 'react';
import './App.css';

function App() {
  // 1. A list (array) of restaurant names
  const restaurantList = ["Afuri", "Akira Sushi", "Ate-Oh-Ate", "Baby Doll Pizza", "Bamboo Sushi SE", "Bar Bar", 
  "Boke Bowl", "Botto's BBQ", "Brooklyn Carreta", "Bugerville", "Chipotle", "Chungdam", "Crisp", "Dove Vivi", 
  "EEM", "Egyptian Bros", "Fire On The Mountain", "FOMO Chicken", "Franks-A-Lot", "Fresh Fish Poke", "Gilda's", "Grassa", 
  "Grand Central Bakery", "Grand Fir Brwery","GrindWitTryz", "Guero", "Han Oak", "Hat Yai", "Hawthorne Asylum", 
  "The Heist", "Hog Wild BBQ", "Hong Kong 97", "J & R Mexican Food", "Jersey Mike's", "Ken's Artisan Pizza", 
  "Khao Moo Dang", "Killer Burger", "King Curry", "Lardo", "Maruti", "Matador", "Loyal Legion", "Matt's BBQ Tacos", 
  "Milwaukie Cafe", "Mike's Drive In", "MOD Pizza", "Montelupo's Foccaceria", "Monty's Red Sauce", "Moon Pocha", 
  "MX21 Mexican", "Noodles And Co.", "The Office", "Panda Express", "Panera Bread", "Pfriem", "Pizzicato", 
  "Pop Pizza", "Por Que No", "Popeyes", "Red Robin", "Sebastiano's", "Schilling Cider Co.", "Sizzlin Indian Grill", 
  "Slide Inn Tavern", "Stammtisch", "SteepleJack", "Taco Bell", "Toji", "Vida 33", "Wrap And Roll", "Ya Hala", 
  "Yang's Noodle", "The Zed"];
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

  <div className = "container">
    <h1 className = "title">PDX FOOD PICKER</h1>
    <div className = "main-tool">
    <button onClick = {selectRestaurant}>Let's Eat</button>
    <h1 className = "final-result-prompt">Here's where you're eating:</h1>
    <p>{selectedRestaurant}</p>
    </div>
  </div>
  );
}

export default App;
