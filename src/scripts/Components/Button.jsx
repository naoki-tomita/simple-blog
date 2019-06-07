import React from "react";
import "../../styles/Components/Button.css"

export function Button({ onClick }) {
  return (
    <button className="btn-sticky" onClick={onClick}>送信</button>
  );
}
