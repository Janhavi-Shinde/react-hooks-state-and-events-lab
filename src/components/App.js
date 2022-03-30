import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [background, setBackground] = useState(false)
  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  function handleOnClick () {
     setBackground((background) => !background);
  }

  return (                                    //background was originally false.
    <div className={"App " + (background ? "dark" : "light")}> 
      <header>
        <h2>Shopster</h2>
        <button onClick={handleOnClick}>Dark Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
