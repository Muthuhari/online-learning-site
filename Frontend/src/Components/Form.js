import React from "react";

function Form({ onSubmit, children }) {
  return (
    <div className="form-group">
      <form onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
}

export default Form;
