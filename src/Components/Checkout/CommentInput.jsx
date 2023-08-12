// src/Checkout/NameInput.jsx
import React from "react";
import "./InputComponent.css"; // Import the CSS file

const CommentInput = ({ value, onChange }) => {
  return (
    <div className="input-container">
      <label>Comment:</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CommentInput;
