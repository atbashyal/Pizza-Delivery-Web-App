// src/Checkout/PaymentButton.jsx
import React from "react";
import "./InputComponent.css"; // Import the CSS file

const PaymentButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>Proceed to Payment</button>
  );
};

export default PaymentButton;
