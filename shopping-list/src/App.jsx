import { useState } from "react";
import "./App.css";
import cartImage from "./assets/cart.png";

function App() {
  const [inputValue, setInputValue] = useState();
  const [groceryItems, setGroceryItems] = useState([]);

  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  //use onkeydown to listen to when Enter button is pressed
  //never mutate state directly eg groceryItems
  const handleAddGroceryItem = (e) => {
    //check if enter button was pressed
    if (e.key === "Enter") {
      //...groceryItems - destructuring. gives you the previous record
      //add new records to existing record
      if (inputValue) {
        setGroceryItems(...groceryItems, {
          quantity: 1,
          name: inputValue,
          completed: false,
        });
        setInputValue("");
      }
    }
  };

  return (
    <main className="App">
      <div>
        <div className="success">
          <h4>You're done shopping</h4>
          <div className="header">
            {inputValue}
            <button
              onClick={() => {
                setInputValue("");
              }}
            >
              Clear
            </button>
            <h1>Shopping List</h1>
            <img src={cartImage} alt="" />
            <input
              type="text"
              placeholder="add an item"
              className="item-input"
              onChange={handleChangeInputValue}
              value={inputValue}
              onKeyDown={handleAddGroceryItem}
            />
          </div>
        </div>
        <ul>
          <li>
            <div className="container">
              <input type="checkbox" />
              <p>Carrots</p>
            </div>
            <div>
              <button className="remove-button">X</button>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default App;
