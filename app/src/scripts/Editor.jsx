import React from "react";
import { firestore } from "firebase";
import "../styles/Editor.css"
import { Input } from "./Components/Input";
import { TextArea } from "./Components/TextArea";
import { Button } from "./Components/Button";
import { ARTICLE_PATH } from "./Constants";
const { useState } = React;

export function Editor() {
  const [state, setState] = useState({ title: "", body: "" });
  const { title, body } = state;

  function onTitleChange(event) {
    setState({ ...state, title: event.target.value });
  }

  function onBodyChange(event) {
    setState({ ...state, body: event.target.value });
  }

  async function sendArticle() {
    if (!title && !body) return;
    const db = await firestore();
    db.collection(ARTICLE_PATH).add({ title, body, createdAt: Date.now() });
    setState({ title: "", body: "" });
  }

  return (
    <>
    <Input placeholder="タイトル" value={title} onChange={onTitleChange} />
    <TextArea placeholder="本文" rows={body.split("\n").length} value={body} onChange={onBodyChange} />
    <div style={{ textAlign: "right" }}><Button onClick={sendArticle}>投稿する</Button></div>
    </>
  )
}
