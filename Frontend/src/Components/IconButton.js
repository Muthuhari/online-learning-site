import React from "react";

function IconButton({ onClick, children, iconClass = "", type = "button", className = "custom-btn" }) {
  return (
    <button onClick={onClick} className={className} type={type}>
      {iconClass && <i className={`${iconClass} me-3`}></i>}
      {children}
    </button>
  );
}

export default IconButton;