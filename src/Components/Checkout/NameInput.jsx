// src/Checkout/NameInput.jsx
import React from "react";
import "./InputComponent.css"; // Import the CSS file

const NameInput = ({ value, onChange }) => {
  return (
    <div className="input-container">      
    <label>Name:</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default NameInput;
