import React from "react";
import "../styles/Article.css"

export function Article({ title, body }) {
  return (
    <>
    <h1>{title}</h1>
    <p ref={p => (p && (p.innerHTML = body.replace(/\n/g, "<br>")))} />
    </>
  )
}
