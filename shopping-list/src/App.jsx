import { useEffect, useState } from "react";
import "./App.css";
import cartImage from "./assets/cart.png";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [groceryItems, setGroceryItems] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    checkCompletedStatus();
  }, [groceryItems]);

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
        const updatedGroceryList = [...groceryItems];

        const itemIndex = updatedGroceryList.findIndex(
          (item) => item.name === inputValue
        );
        if (itemIndex === -1) {
          updatedGroceryList.push({
            name: inputValue,
            quantity: 1,
            completed: false,
          });
        } else {
          updatedGroceryList[itemIndex].quantity++;
        }

        setGroceryItems(updatedGroceryList);
        setInputValue("");
      }
    }
  };
  const handleDeleteItem = (name) => {
    setGroceryItems([...groceryItems].filter((item) => item.name !== name));
  };
  // use onClick={() => handleDeleteItem(item)}
  //instead of onClick={handleDeleteItem(item)}, this triggers after render

  const handleStatusChange = (status, index) => {
    const updatedGrocerylist = [...groceryItems];
    updatedGrocerylist[index].completed = status;
    setGroceryItems(updatedGrocerylist);
    checkCompletedStatus();
  };

  const checkCompletedStatus = () => {
    if (!groceryItems.length) {
      return setIsCompleted(false);
    }

    let isAllCompleted = true;
    groceryItems.forEach((item) => {
      if (!item.completed) isAllCompleted = false;
    });

    setIsCompleted(isAllCompleted);
  };

  const renderGroceryList = () => {
    return groceryItems.map((item, index) => (
      <li key={item.name}>
        <div className="container">
          <input
            type="checkbox"
            onChange={(e) => handleStatusChange(e.target.checked, index)}
            value={item.completed}
            checked={item.completed}
          />
          <p>
            {item.name} {item.quantity > 1 && <span>x{item.quantity}</span>}
          </p>
        </div>
        <div>
          <button
            className="remove-button"
            onClick={() => handleDeleteItem(item.name)}
          >
            X
          </button>
        </div>
      </li>
    ));
  };

  return (
    <main className="App">
      <div>
        <div className="success">
          {isCompleted && <h4>You're done shopping</h4>}
          <div className="header">
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
        <ul>{renderGroceryList()}</ul>
      </div>
    </main>
  );
}

export default App;
