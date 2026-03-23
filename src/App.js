import { useState } from 'react';
import './App.css';

function App() {
  // 1. A list (array) of restaurant names
  const lowPriceList = ["Chipotle", "Franks-A-Lot", "Panda Express", "Taco Bell"]

  const midPriceList = ["Afuri", "Ate-Oh-Ate", "Baby Doll Pizza", "Bar Bar", "Boke Bowl", "Botto's BBQ", 
    "Brooklyn Carreta", "Bugerville", "Chungdam", "Crisp", "Dove Vivi", "Egyptian Bros", "Fire On The Mountain", 
    "FOMO Chicken", "Fresh Fish Poke", "Grassa", "Grand Central Bakery", "Grand Fir Brwery","GrindWitTryz", "Guero",
    "Hat Yai", "Hawthorne Asylum", "The Heist", "Hog Wild BBQ", "Hong Kong 97", "J & R Mexican Food", "Jersey Mike's", 
    "Ken's Artisan Pizza", "Khao Moo Dang", "Killer Burger", "King Curry", "Lardo","Matador", "Loyal Legion", 
    "Matt's BBQ Tacos", "Milwaukie Cafe", "Mike's Drive In", "MOD Pizza", "Montelupo's Foccaceria", "MX21 Mexican", 
    "Noodles And Co.", "The Office", "Panera Bread", "Pfriem", "Pizzicato", "Pop Pizza", "Por Que No", "Popeyes", "Red Robin", 
    "Sebastiano's", "Schilling Cider Co.", "Sizzlin Indian Grill", "Slide Inn Tavern", "Stammtisch", "SteepleJack", "Toji",
    "Wrap And Roll", "Ya Hala", "Yang's Noodle", "The Zed"]

  const highPriceList = ["Akira Sushi", "Bamboo Sushi SE", "EEM", "Gilda's", "Han Oak", "Maruti",
  "Monty's Red Sauce", "Moon Pocha", "Vida 33"]

  // 2. Some state to store the "picked" restaurant (hint: useState)
  const [selectedRestaurant, setSelectedRestaurant] = useState("");

  const [selectedList, setSelectedPrice] = useState("");

  // 3. A function that picks a random one from the list
  function selectRestaurant() {
  const list = selectedList === "low" ? lowPriceList : selectedList === "mid" ? midPriceList : highPriceList;
  const randomIndex = Math.floor(Math.random() * list.length);
  setSelectedRestaurant(list[randomIndex]);
  } 

  function selectLowPriceList() {
    setSelectedPrice("low");
  }

  function selectMidPriceList() {
    setSelectedPrice("mid");
  }

  function selectHighPriceList() {
    setSelectedPrice("high");
  }

  return (
  // 4. Return some JSX with:
  //    - a button that triggers the function
  //    - something to display the result

  <div className = "container">
    <h1 className = "title">PDX FOOD PICKER</h1>
    <div className = "main-tool">
    <div className = "dollar-button-container">
    <button className={selectedList === "low" ? "dollar-button active" : "dollar-button"} onClick={selectLowPriceList}>$</button>
    <button className={selectedList === "mid" ? "dollar-button active" : "dollar-button"} onClick={selectMidPriceList}>$$</button>
    <button className={selectedList === "high" ? "dollar-button active" : "dollar-button"} onClick={selectHighPriceList}>$$$</button>
    </div>
    <button onClick = {selectRestaurant}>Let's Eat</button>
    <h1 className = "final-result-prompt">Here's where you're eating:</h1>
    <p>{selectedRestaurant}</p>
    </div>
  </div>
  );
}

export default App;
