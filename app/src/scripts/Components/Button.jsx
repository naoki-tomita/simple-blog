import React from "react";
import "../../styles/Components/Button.css"

export function Button({ onClick, children }) {
  return (
    <button className="btn-sticky" onClick={onClick}>{children}</button>
  );
}
