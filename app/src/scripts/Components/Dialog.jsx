import React from "react";
import { Button } from "./Button";
import "../../styles/Components/Dialog.css"

export function Dialog({
  children,
  title,
  onOk,
  onCancel,
  okButtonLabel,
  isOpen
}) {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <div className="dialog-container">
        <div className="dialog-title">{title}</div>
          <div className="dialog-content">
          {children}
          <div className="dialog-footer">
            <Button onClick={onOk}>{okButtonLabel}</Button>
            <span style={{ display: "inline-block", width: "12px" }} />
            <Button onClick={onCancel}>閉じる</Button>
          </div>
        </div>
      </div>
      <div className="dialog-backdrop" onClick={onCancel} />
    </div>
  );
}
