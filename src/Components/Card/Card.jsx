import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";

// ... (other imports and code)

function Card({ food, onAdd, onRemove, cartItems }) {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState("Regular");
  
  // Count the total quantity of each size for this pizza type in the cart
  const sizeQuantities = {
    Regular: 0,
    Medium: 0,
    Large: 0,
  };
  cartItems.forEach((item) => {
    if (item.id === food.id) {
      sizeQuantities[item.size] += item.quantity;
    }
  });

  const { title, Image } = food;

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(food, size);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(food, size);
  };

  const handleSizeChange = (event) => {
    const newSize = event.target.value;
    setSize(newSize);
  };

  const handleAddSize = () => {
    handleIncrement();
  };

  const handleRemoveSize = () => {
    handleDecrement();
  };

  // Calculate adjusted price based on selected size
  const priceMultiplier =
    size === "Regular" ? 1 : size === "Medium" ? 1.75 : 2.5;
  const adjustedPrice = food.price * priceMultiplier;

  return (
    <div className="card">
      <span className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}>
        {count}
      </span>
      <div className="image__container">
        <img src={Image} alt={title} />
      </div>
      <h4 className="card__title">
        {title} : <span className="card__price">Rs. {adjustedPrice.toFixed(2)}</span>
      </h4>
      
      
      <select className="item__options" value={size} onChange={handleSizeChange}>
        <option value="Regular" className="option">Regular</option>
        <option value="Medium" className="option">Medium</option>
        <option value="Large" className="option">Large</option>
      </select>
      

      <div className="btn-container">
        <Button title={"+"} type={"add"} onClick={handleAddSize} />
        {sizeQuantities[size] > 0 && (
          <Button title={"-"} type={"remove"} onClick={handleRemoveSize} />
        )}
      </div>
    </div>
  );
}

export default Card;
