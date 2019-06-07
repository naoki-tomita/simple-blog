import React from "react";
import "../../styles/Components/TextArea.css"

export function TextArea({ placeholder, rows, value, onChange }) {
  return (
    <div className="cp_iptxtarea">
      <textarea rows={rows} className="ef" type="text" value={value} onChange={onChange} />
      <label>{placeholder}</label>
      <span className="focus_line"></span>
    </div>
  );
}
