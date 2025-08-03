import React from "react";

function ButtonGroup({ onCancel, cancelText = "Cancel", submitText = "Submit" }) {
  return (
    <div className="button-group">
      <button
        type="button"
        className="btn btn-secondary ms-2"
        onClick={onCancel}
      >
        {cancelText}
      </button>
      <button type="submit" className="btn btn-primary submit">
        {submitText}
      </button>
    </div>
  );
}

export default ButtonGroup;
