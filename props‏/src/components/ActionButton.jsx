import React from "react";

function ActionButton({ label, onAction }) {
  return (
    <button
      onClick={onAction}
      style={{ padding: "10px 20px", cursor: "pointer",margin:"10px"}}
    >
      {label}
    </button>
  );
}

export default ActionButton;
