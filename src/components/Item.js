import {React, useState} from "react";

function Item({ name, category }) {

  const [ classname, setClassName] = useState(true)

function handleOnClick2 ()
{setClassName((classname) => !classname) }
  return (
    <li className={(classname? "": "in-cart")}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleOnClick2}>Add to Cart</button>
    </li>
  );
}

export default Item;
