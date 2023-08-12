// src/Checkout/CheckoutForm.jsx
import React from "react";
import NameInput from "./NameInput";
import PhoneNumberInput from "./PhoneNumberInput";
import AddressInput from "./AddressInput";
import CommentInput from "./CommentInput";
import PaymentButton from "./PaymentButton";

import "./CheckoutForm.css"; // Import the CSS file

const CheckoutForm = ({ checkoutInfo, onInputChange, onPayment }) => {
  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <NameInput value={checkoutInfo.name} onChange={onInputChange("name")} />
      <PhoneNumberInput value={checkoutInfo.phoneNumber} onChange={onInputChange("phoneNumber")} />
      <AddressInput value={checkoutInfo.address} onChange={onInputChange("address")} />
      <CommentInput value={checkoutInfo.comment} onChange={onInputChange("comment")} />
      <PaymentButton onClick={onPayment} />
    </div>
  );
};

export default CheckoutForm;
