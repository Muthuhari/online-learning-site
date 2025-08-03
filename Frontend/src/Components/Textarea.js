import React from "react";

function Textarea({ name, value, onChange, label, required = false }) {
  return (
    <div className="form-group">
      {label && <label htmlFor={name} >{label}</label>}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="textarea-field"
        required={required}
      />
    </div>
  );
}

export default Textarea;