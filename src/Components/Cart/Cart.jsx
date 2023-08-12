import React from "react";
import "./Cart.css";
import Button from "../Button/Button";

function Cart({ cartItems, onCheckout }) {
  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = typeof item.price === "number" ? item.price : 0;
    const itemQuantity = typeof item.quantity === "number" ? item.quantity : 0;
    const adjustedItemPrice = itemPrice * (item.size === "Medium" ? 1.75 : item.size === "Large" ? 2.5 : 1);
    return total + adjustedItemPrice * itemQuantity;
  }, 0);

  return (
    <div className="cart__container">
      {cartItems.length === 0 ? "Cart Empty. " : ""}
      <br></br>
      <span className="total__price">
        Total Price: Rs. {totalPrice.toFixed(2)}
      </span>
      <Button
        title={`${cartItems.length === 0 ? "Order" : "Checkout"}`}
        type={"checkout"}
        disable={cartItems.length === 0}
        onClick={onCheckout}
      />
    </div>
  );
}

export default Cart;
