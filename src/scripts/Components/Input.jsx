import React from "react";
import "../../styles/Components/Input.css"

export function Input({ placeholder, value, onChange }) {
  return (
    <div className="cp_iptxt">
      <input className="ef" type="text" placeholder="" value={value} onChange={onChange} />
      <label>{placeholder}</label>
      <span className="focus_line"></span>
    </div>
  );
}
