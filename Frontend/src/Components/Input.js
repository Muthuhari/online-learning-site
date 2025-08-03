import React from "react";

function Input({ type = "text", name, value, onChange, label, required = false }) {
  return (
    <div >
      {label && <label htmlFor={name} className="label">{label} </label>}
      
      <input
         className="input-field"
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default Input;
