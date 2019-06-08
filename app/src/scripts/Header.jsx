import React from "react";
import "../styles/Header.css"
import { Button } from "./Components/Button";

export function Header({ onEditorOpen }) {
  return (
    <div className="header">
      <h1 className="title">Simple blog</h1>
      <Button onClick={onEditorOpen}>記事を書く</Button>
    </div>
  )
}
