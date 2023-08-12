// src/Checkout/NameInput.jsx
import React from "react";
import "./InputComponent.css"; // Import the CSS file

const AddressInput = ({ value, onChange }) => {
  return (
    <div className="input-container">
      <label>Address:</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default AddressInput;
