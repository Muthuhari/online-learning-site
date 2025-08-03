import React from "react";

function Textarea({ name, value, onChange, label, required = false }) {
  return (
    <div>
      {label && <label htmlFor={name} className="label"> {label} </label>}

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