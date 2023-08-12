// src/Checkout/NameInput.jsx
import React from "react";
import "./InputComponent.css"; // Import the CSS file

const PhoneNumberInput = ({ value, onChange }) => {
  return (
    <div className="input-container">
      <label>Phone Number:</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default PhoneNumberInput;
