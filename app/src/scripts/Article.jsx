import React from "react";
import "../styles/Article.css"

export function Article({ title, body }) {
  return (
    <div className="article">
      <h2>{title}</h2>
      <div className="body" ref={p => (p && (p.innerHTML = body.replace(/\n/g, "<br>")))}>{body}</div>
    </div>
  )
}
