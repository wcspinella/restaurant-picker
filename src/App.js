import { useState } from 'react';
import './App.css';

function App() {
  // 1. A list (array) of restaurant names
  const lowPriceList = ["Burgerville", "Chipotle", "Egyptian Bros", "Franks-A-Lot", "Grand Central Bakery", "Hong Kong 97", 
    "Jersey Mike's", "The Meddling Lime", "Midpoint", "Noodles And Co.", "Panda Express",  "Panera Bread", "Pizzicato", 
    "Popeyes", "Taco Bell"]

  const midPriceList = ["Afuri", "Akira Sushi", "Ate-Oh-Ate", "Baby Doll Pizza", "Bai Mint Thai", "Bar Bar", "Bastion", 
    "Bluto's", "Boke Bowl", "Bollywood Theater", "Botto's BBQ", "Brooklyn Carreta", "Chungdam", "Cricket Cafe", "Crisp", 
    "Dove Vivi", "East Side Delicatessen", "EEM", "Enat Kitchen", "Ex Novo Brewing", "Fantino", "Fire On The Mountain", 
    "FOMO Chicken", "Fresh Fish Poke", "Gilda's", "Grassa", "Grand Fir Brewing","GrindWitTryz", "Güero", "Hat Yai", 
    "Hawthorne Asylum", "The Heist", "Hog Wild BBQ", "J & R Mexican Food", "Jade Bistro", "Jam on Hawthorne", 
    "Ken's Artisan Pizza", "Khao Moo Dang", "Killer Burger", "King Curry", "La Bonita", "Lardo", "Laughing Planet", 
    "Lovely's Fifty Fifty", "Loyal Legion", "Maruti", "Matador", "Matt's BBQ Tacos", "MidCity SmashedBurger", 
    "Milwaukie Cafe", "Mike's Drive In", "MOD Pizza", "Montelupo's Foccaceria", "MX21 Mexican", "Monty's Red Sauce", 
    "Moon Pocha", "The Original Halibuts", "Paadee", "Pfriem", "Podnah's Pit BBQ", "Pop Pizza", "Por Que No", 
    "Pretty Boy Pizza", "Queen of Sheba", "Red Robin", "Sebastiano's", "Schilling Cider Co.", "Shalom Y'all", 
    "Sizzlin Indian Grill", "Slide Inn Tavern", "Stammtisch", "SteepleJack", "Sweedeedee", "Tabor Bread", "Toji", 
    "Vida 33", "Wrap And Roll", "Ya Hala", "Yalla", "Yang's Noodle", "The Zed"]

  const highPriceList = ["Bamboo Sushi", "Bluefin Sushi", "Dolly Olive", "Han Oak"]

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
